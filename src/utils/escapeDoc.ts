export const escapeDoc = (doc: string) => {
    return doc.replace(/\.|-/gm, '');
}