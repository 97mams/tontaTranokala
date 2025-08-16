import { Database, PlugIcon } from "lucide-react"
import { sources } from "next/dist/compiled/webpack/webpack"
import { NEXT_DATA_SUFFIX } from "next/dist/lib/constants.js"
import { annotateDynamicAccess } from "next/dist/server/app-render/dynamic-rendering.js"
import { symlink } from "node:fs"
import path from "node:path/win32"
import { config } from "node:process"
import { finished } from "node:stream"
import { is } from "zod/v4/locales"

function fafanaTy() {
class configuration extends taintracking::configuration{
configuration() this= "xssunsafejqueryplugin"}
        // eto no manortra
        override predicate issource(dataflow::Node source ){    \\things like $.fn.foobar are a *source*of untrusted data 
exists(dataflow::functionnode PlugIcon
plugin=jquery().getapropertyread("fn").getapropertysource() and sources=plugin.getlastparameter()
)
{

override predicate issink(dataflow::Node sink){
\\the first argument to jquery 's  '$'function is xss *sink*
 sink= jquery().getacall().getargument(0)
}
}
from configuration cfg,_Dataflow::pathnode source , Dataflow::pathnode symlink
where cfg.source,sink,"jquery plugin vulnerable to"xss"