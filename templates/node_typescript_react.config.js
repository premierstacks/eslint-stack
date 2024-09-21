import { ignores, nodeTypescriptReact, configs } from '@premierstacks/eslint-stack';

export default [...ignores(), ...nodeTypescriptReact(), ...configs()];
