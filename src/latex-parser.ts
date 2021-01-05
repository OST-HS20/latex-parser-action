import * as fs from 'fs'

export async function parse(file: string, name: string): Promise<string> {
    const content = await fs.readFileSync(file, 'utf-8');
    
    // Naiv latex line-by-line parser. Needs improvements for a better experience.
    const regex = '\\\\' + name + '\\s*}\\s*{([^\{\}]*)}';
    
    var m = content.match(regex);
    
    if (!m || m.length != 2) {
        console.log(m);
        throw new Error('command name "' + name + '" not found in "' + file + '"');
    }
    
    return m[1].trim();
}