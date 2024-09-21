import { ignores, browser, configs } from '@premierstacks/eslint-stack';

export default [...ignores(), ...browser(), ...configs()];
