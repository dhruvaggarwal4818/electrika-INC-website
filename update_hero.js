const fs = require('fs');
const path = require('path');

const mapping = {
    'HighMastPoles': 'high-mast-poles',
    'FlagMastPoles': 'flag-mast-poles',
    'LoweringMechanisms': 'lowering-mechanisms',
    'GiOctagonalPole': 'gi-octagonal-pole',
    'LatchingMast': 'latching-mast',
    'DecoratedPoles': 'decorated-poles',
    'FlpLedLight': 'flp-led-light',
    'SolarStreetLight': 'solar-street-light',
    'StreetLight': 'led-street-light',
    'FlpLedHighbay': 'flp-led-highbay',
    'PcePlugSocket': 'pce-plug-socket',
    'HeavyDutyPlug': 'heavy-duty-plug',
    'Pce125APlug': '125a-plug',
    'CableDrums': 'synthetic-cable-drum',
    'EmergencyStopButton': 'emergency-stop-button',
    'SmallControlStation': 'small-control-station',
    'McbBox': 'mcb-box',
    'PbsControlBox': 'pbs-control-box',
    'HenselBoxes': 'hensel-boxes',
    'FlpJunctionBox': 'flp-junction-box',
    'FloodLight': 'flood-light'
};

const folder = 'C:\\\\Users\\\\Acer\\\\Desktop\\\\antigravity\\\\src\\\\app\\\\products\\\\[slug]';

fs.readdirSync(folder).forEach(filename => {
    if (!filename.endsWith('.tsx')) return;
    
    const comp_name = filename.replace('.tsx', '');
    const slug = mapping[comp_name];
    const filepath = path.join(folder, filename);
    let content = fs.readFileSync(filepath, 'utf-8');
    
    if (slug) {
        content = content.replace(
            /className=\{styles\.heroImage\}/g,
            `className={styles.heroImage} style={{ viewTransitionName: 'product-image-${slug}' }}`
        );
    } else if (filename === 'page.tsx') {
        content = content.replace(
            /className=\{styles\.heroImage\}/g,
            `className={styles.heroImage} style={{ viewTransitionName: 'product-image-flp-led-highbay' }}`
        );
    }
    
    fs.writeFileSync(filepath, content, 'utf-8');
});
console.log('Done!');
