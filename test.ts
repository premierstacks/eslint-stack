import { configs, ignores, node } from '@premierstacks/eslint-stack';

export default [...ignores(), ...node(), ...configs()];
