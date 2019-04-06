(function() {
    GMEdit.register("ecma", {
        init: function() {
            let create = $gmedit["file.FileKind"].prototype.create;
            $gmedit["file.FileKind"].prototype.create = function() {
                ecma.Check();
                if ($gmedit["gml.Project"].current.ecma == true) {
                    arguments[1] = arguments[1].replace(".gml", ".js");
                }
                return create.apply(this, arguments);
            }
            let run = $gmedit["parsers.GmlSeeker"].run;
            $gmedit["parsers.GmlSeeker"].run = function() {
                ecma.Check();
                if ($gmedit["gml.Project"].current.ecma == true) {
                    arguments[0] = arguments[0].replace(".gml", ".js");
                }
                let Return = run.apply(this, arguments);
                return Return;
            }
            let toPath = $hxClasses["yy.YyEvent"].toPath;
            $hxClasses["yy.YyEvent"].toPath = function() {
                let Return = toPath.apply(this, arguments);
                return ($gmedit["gml.Project"].current.ecma == true ? Return.replace(".gml", ".js") : Return);
            }
        }
    });

    ecma = {Check: function() {
        let Project = $gmedit["gml.Project"].current;
        if (Project.ecma == undefined) {
            Project.ecma = (Project.version == 2 ? Project.ecma = JSON.parse(Electron_FS.readFileSync(Project.path))["option_ecma"] : false) || false;
        }
    }};
})();