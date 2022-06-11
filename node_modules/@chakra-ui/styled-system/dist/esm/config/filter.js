import { t, transforms } from "../utils";
export var filter = {
  filter: {
    transform: transforms.filter
  },
  blur: t.blur("--chakra-blur"),
  brightness: t.propT("--chakra-brightness", transforms.brightness),
  contrast: t.propT("--chakra-contrast", transforms.contrast),
  hueRotate: t.degreeT("--chakra-hue-rotate"),
  invert: t.propT("--chakra-invert", transforms.invert),
  saturate: t.propT("--chakra-saturate", transforms.saturate),
  dropShadow: t.propT("--chakra-drop-shadow", transforms.dropShadow),
  backdropFilter: {
    transform: transforms.backdropFilter
  },
  backdropBlur: t.blur("--chakra-backdrop-blur"),
  backdropBrightness: t.propT("--chakra-backdrop-brightness", transforms.brightness),
  backdropContrast: t.propT("--chakra-backdrop-contrast", transforms.contrast),
  backdropHueRotate: t.degreeT("--chakra-backdrop-hue-rotate"),
  backdropInvert: t.propT("--chakra-backdrop-invert", transforms.invert),
  backdropSaturate: t.propT("--chakra-backdrop-saturate", transforms.saturate)
};
//# sourceMappingURL=filter.js.map