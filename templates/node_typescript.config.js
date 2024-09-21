import { ignores, nodeTypescript, configs } from '@premierstacks/eslint-stack';

export default [...ignores(), ...nodeTypescript(), ...configs()];
