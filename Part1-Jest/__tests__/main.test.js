const { testPathIgnorePatterns } = require("../jest.config");

const main = require('../assets/scripts/main')

describe('formatVolumeIconPath', () => {
    test('gt 66', () => {
        expect(main.formatVolumeIconPath(70)).toMatch(`./assets/media/icons/volume-level-3.svg`);
    });
    test('gt 33', () => {
        expect(main.formatVolumeIconPath(40)).toMatch(`./assets/media/icons/volume-level-2.svg`);
    });
    test('gt 0', () => {
        expect(main.formatVolumeIconPath(20)).toMatch(`./assets/media/icons/volume-level-1.svg`);
    });
    test('eq 0', () => {
        expect(main.formatVolumeIconPath(0)).toMatch(`./assets/media/icons/volume-level-0.svg`);
    });
});