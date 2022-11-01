import * as random from '@pulumi/random';

const password = new random.RandomPassword('password', {length: 8});
