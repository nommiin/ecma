# ecma
A small GMEdit plugin that fixes errors that occur when loading in option_ecma enabled GMS 2 projects

# huh
In the early stages of GameMaker Studio 2's development, YYG had built compilation target that had allowed for usage of JavaScript inside of your GMS 2 project. The compiler would read the JS and compile it to GameMaker bytecode. The feature was never mentioned or publically shown, but it can still be used by enabling the "option_ecma" key inside of the project's YYP file. Given the obscurity of the feature, GMEdit does not properly support these types of projects. This plugin aims to allow for GMEdit to read/write projects with "option_ecma" enabled.

# welp
If something is broken, let me know! So far I've only tested loading both objects and scripts, but there may be more things that are mega broken!
