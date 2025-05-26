import { UserConfigExport } from "vitest/config";

export default {
	test: { globals: true, //ALLOWS USE OF describe, it, and expect WITHOUT IMPORTING
     watch: false }, //VITEST WATCHES BY DEFAULT, TURNS OFF WATCHING
} as UserConfigExport;
