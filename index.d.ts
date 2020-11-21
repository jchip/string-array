declare module "string-array" {
    namespace stringArray {
        function parse(str: string, noPrefix?: boolean, noExtra?: boolean): Array<any>;
    }
    export = stringArray;
}
