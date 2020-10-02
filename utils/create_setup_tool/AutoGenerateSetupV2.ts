import {GAME_PLAYERS_REQUIRE_ROLES, ROLE_REQUIRE_MIN_PLAYER, ROLE_REQUIRE_ROLES} from "./SetupRequiments";
import {ROLE_MAX, ROLE_POINT} from "../../definitions/RoleConsts";
import {AVAILABLE_ROLES, PARTY, ROLE_PARTY, Roles} from "../../enums";
import {MapSchema} from "@colyseus/schema";
import {mapSchemaNumber2Array} from "../../colyseus/Utils";

const fs = require("fs");
const fileName = "PreSetups_auto.ts";
let setupCount = 0;

const headFile =
    "// THIS IS GENERATED FILE BY AutoGenerateSetupV2.ts\n" +
    'import {Roles} from "../../enums";\n' +
    "export interface IPreSetup {\n" +
    "    balancePoint: number;\n" +
    "    PRE_SETUPS: Roles[];\n" +
    "}\n" +
    "export const PRE_SETUPS: { [numOfPlayer: number]: IPreSetup[] } = {\n";
const tailFile = "};";
const headPreSet = (num_of_player: number) => `\t[${num_of_player}]: [\n`;
const tailPreSet = (count: number) => `\t], // ${count} setups generated\n`;
const headSetup = "\t\t{\n";
const tailSetup = `\t\t},\n`;
const balancePointLine = (balancePoint: number) => `\t\t\tbalancePoint: ${balancePoint},\n`;
const setupLine = (setup: string) => `\t\t\tsetup: [${setup}]\n`;
const ROLE_TEXT = Object.values(Roles).slice(0, Object.keys(Roles).length / 2);
const roleElementStr = (role: Roles) => ` Roles.${ROLE_TEXT[role]} `;

async function appendSetupToFile(balancePoint: number, setup: number[]) {
    try {
        await fs.appendFileSync(fileName, headSetup);
        await fs.appendFileSync(fileName, balancePointLine(balancePoint));
        let setupArr = setup
            .map((r) => {
                const role = r as Roles;
                return roleElementStr(role);
            })
            .toString();
        await fs.appendFileSync(fileName, setupLine(setupArr.toString()));
        await fs.appendFileSync(fileName, tailSetup);
    } catch {}
}

let used: number[] = Array(100).fill(0);

let setupArr: number[] = Array(20);

function checkRoleRequirement(n: number): boolean {
    const rolesInGame = setupArr.slice(0, n).filter((r) => used[r] > 0);
    if (rolesInGame.length < 3) return false;
    const villagerCount = used[Roles.VILLAGER];
    if (villagerCount < n / 4 || villagerCount > n / 2) return false;
    for (let i = 0; i < rolesInGame.length; i++) {
        const role = rolesInGame[i] as Roles;
        for (let j = 0; j < ROLE_REQUIRE_ROLES[role].length; j++) {
            const roleRequired = ROLE_REQUIRE_ROLES[role][j];
            if (!rolesInGame.includes(roleRequired)) return false;
        }
    }
    for (let i = 0; i < GAME_PLAYERS_REQUIRE_ROLES[n].length; i++) {
        const role = GAME_PLAYERS_REQUIRE_ROLES[n][i];
        if (!rolesInGame.includes(role)) return false;
    }
    return true;
}

export function calculateBalancePoint(setup: MapSchema<number> | Roles[]): number {
    let balance = 0;
    let setupArr = Array.isArray(setup) ? setup : mapSchemaNumber2Array(setup);
    for (let i = 0; i < setupArr.length; i++) {
        const role = setupArr[i] as Roles;
        balance += ROLE_POINT[role];
    }
    return balance;
}

async function checkSetup(n: number) {
    if (!checkRoleRequirement(n)) return;
    const balance = calculateBalancePoint(setupArr);
    const allowBalance = 3;
    if (Math.abs(balance) > allowBalance) return;
    let badCount = 0; // Tổng số người chơi theo phe sói
    let goodCount = 0; // Tổng số người chơi theo phe dân
    let twoFaceCount = 0; // Tổng số người chơi có thể đổi phe
    for (let i = 0; i < n; i++) {
        const role = setupArr[i] as Roles;
        if (ROLE_PARTY[PARTY.VILLAGER].includes(role)) goodCount++;
        if (ROLE_PARTY[PARTY.WEREWOLF].includes(role)) badCount++;
        if (ROLE_PARTY[PARTY.BETRAYER].includes(role)) twoFaceCount++;
    }
    if (badCount >= Math.floor(n / 2) || badCount < Math.max(Math.floor(n / 5), 1)) return;
    if (n >= 8 && twoFaceCount < 1) return;
    await appendSetupToFile(balance, setupArr.slice(0, n));
    setupCount++;
}

async function gen(i: number, n: number) {
    if (i === n) {
        await checkSetup(n);
        return;
    }
    const lastGenRole = i > 0 ? setupArr[i - 1] : 0;
    for (let j = lastGenRole; j < AVAILABLE_ROLES.length; j++) {
        if (used[j] < ROLE_MAX[j as Roles] && ROLE_REQUIRE_MIN_PLAYER[j as Roles] <= n) {
            used[j]++;
            setupArr[i] = j;
            await gen(i + 1, n);
            used[j]--;
        }
    }
}

export async function generatePreSetup() {
    await fs.writeFileSync(fileName, headFile);
    for (let i = 4; i <= 20; i++) {
        console.log(`Generate setups for ${i} players`);
        await fs.appendFileSync(fileName, headPreSet(i));
        setupCount = 0;
        used = Array(100).fill(0);
        await gen(0, i);
        await fs.appendFileSync(fileName, tailPreSet(setupCount));
        console.log(`${setupCount} setups generated for ${i} players`);
    }
    await fs.appendFileSync(fileName, tailFile);
}

generatePreSetup().catch((e) => console.error(e));
