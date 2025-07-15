const images = import.meta.glob('./logos/*.png', {
    eager: true,
    import: 'default',
})

const hardSkillImages: Record<string, string> = {};

for (const path in images) {
    const fileName = path.split('/').pop()?.replace('.png', '');
    if (fileName) {
        hardSkillImages[fileName] = images[path] as string;
    }
}

export default hardSkillImages;