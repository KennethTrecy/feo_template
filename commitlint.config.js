module.exports = {
	"extends": [ "@commitlint/config-conventional" ],
	"rules": {
		"body-case": [ 2, "always", "sentence-case" ],
		"body-max-line-length": [ 2, "always", 72 ],
		"signed-off-by": [ 2, "always", "" ],
		"type-enum": [
			2,
			"always",
			[
				"feat",
				"perf",
				"fix",
				"refactor",
				"docs",
				"build",
				"chore",
				"test",
				"style",
				"ci",
				"dprct",
				"remove",
				"security",
				"revert",
				"internal"
			]
		],
		"type-max-length": [ 2, "never", 8 ]
	}
};
