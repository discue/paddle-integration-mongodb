# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.0.1](https://github.com/discue/paddle-integration-mongodb/compare/paddle-integration-mongodb-v1.0.0...paddle-integration-mongodb-v1.0.1) (2026-10-22)


### Features

* add jsdoc to main export to enable typings ([9453b92](https://github.com/discue/paddle-integration-mongodb/commit/9453b9259ba81423d98d9726d673a9943b2e0a06))
* add mongodb storage module ([72c21f0](https://github.com/discue/paddle-integration-mongodb/commit/72c21f06f06d89fd2713e1dbe72dbc88426cba53))
* allow logging of outgoing requests ([1fee644](https://github.com/discue/paddle-integration-mongodb/commit/1fee644742dca4cfba6bfad14f10b0663b6db8fb))
* allow resource name to be customized ([00f81f9](https://github.com/discue/paddle-integration-mongodb/commit/00f81f922349a5b7cf8a11cd498e9f58cb0b8411))
* **api:** add get plan by id method ([a1b1fcd](https://github.com/discue/paddle-integration-mongodb/commit/a1b1fcdeed07c4e7c6ca9554d34e777fe59b75c8))
* **api:** add get subscription payments method ([4c5909e](https://github.com/discue/paddle-integration-mongodb/commit/4c5909e663f4d3b520c252f453758a5d252f9781))
* **middleware:** emit events after successful hook processing ([190f0a5](https://github.com/discue/paddle-integration-mongodb/commit/190f0a5990ebc65c5c5e1e8b2e6c18fbb6e6a665))
* **storage:** allow passing mongo client ([8b962fe](https://github.com/discue/paddle-integration-mongodb/commit/8b962feda08f821b7ebd2c96aa23bf7feaf98c2e))
* **subscription-hydration:** also hydrate payments ([1a81dc5](https://github.com/discue/paddle-integration-mongodb/commit/1a81dc587a6e41340d13eabc416e9620a2bd450f))
* **subscription-hydration:** also store instalments and sale_gross values ([d423e66](https://github.com/discue/paddle-integration-mongodb/commit/d423e6674196241945a808c8eafc9e06c36afbf5))
* **subscription-hydration:** check if plan already active ([5d0d90e](https://github.com/discue/paddle-integration-mongodb/commit/5d0d90ed61282bc895b5fb20de97fdfdbbddb8e8))
* **subscription-hydration:** require plan id instead of subscription id param ([48394ce](https://github.com/discue/paddle-integration-mongodb/commit/48394ce9ee0e9107ccacedddfe6dfac6375b793c))
* **subscription-hydration:** set effective cancellation date based on last payment ([931d9e6](https://github.com/discue/paddle-integration-mongodb/commit/931d9e6751bfa8cc6a980ecafbfc9706d66eeea5))
* **subscription-info:** add find subscription id method ([7ff3dbc](https://github.com/discue/paddle-integration-mongodb/commit/7ff3dbc0674f6e1c3a75f7cfb8f74893ac689541))
* **subscription-info:** expect object or resource ids ([50e037a](https://github.com/discue/paddle-integration-mongodb/commit/50e037a4610d4f859a0c87296991e64019060c28))
* **subscription-info:** return update and cancel url too ([b15b5a9](https://github.com/discue/paddle-integration-mongodb/commit/b15b5a9ed3687cdf82089cdc2049aa4f6af1e5a4))
* **subscriptioninfo:** return more details for hydrated payments ([137d157](https://github.com/discue/paddle-integration-mongodb/commit/137d1573e4d776ebe04768a257f90a16bbd01934))
* use discue mongo db storage client ([f8c2707](https://github.com/discue/paddle-integration-mongodb/commit/f8c2707547ffa13509aa0e96dffd11c73568ba7a))
* use mongodb storage module ([cc8e939](https://github.com/discue/paddle-integration-mongodb/commit/cc8e939154004cd72df0794ebdc4646657879ff4))


### Bug Fixes

* attach caught cause to thrown error to resolve eslint failure ([1e54fe2](https://github.com/discue/paddle-integration-mongodb/commit/1e54fe266a2c304cee0d2bffa608cd876e12fba8))
* **encoder:** encode only strings ([f170c17](https://github.com/discue/paddle-integration-mongodb/commit/f170c178e486acd1aa147c8a4aec4f5d36130b71))
* **html-encoder:** do not encode value false ([f14de08](https://github.com/discue/paddle-integration-mongodb/commit/f14de08edd8e8d99d29b445762ff94e6fb0617e7))
* **hydration:** fix calculation of subscription end date ([492ded3](https://github.com/discue/paddle-integration-mongodb/commit/492ded36871a893d221699fb89f7d8e38abad82a))
* null pointers when using resource name starting with _ ([69c2f19](https://github.com/discue/paddle-integration-mongodb/commit/69c2f1995be61038da9892ae84689cdc8e2898b4))
* **subscription-info:** add cause to thrown error in _getOrReadSubscription catch block ([347fe35](https://github.com/discue/paddle-integration-mongodb/commit/347fe35ed230c848e544c4dd7d274ed84da12e7e))
* **subscription-info:** return subscription and not parent object ([af8d208](https://github.com/discue/paddle-integration-mongodb/commit/af8d208f5027277402a4b5c65a290598c2985495))


### Miscellaneous Chores

* add order details callback ([1c3ae84](https://github.com/discue/paddle-integration-mongodb/commit/1c3ae8474cca980d0b7ac59a85a0c007b36a3266))
* add simple logger ([aad2ddf](https://github.com/discue/paddle-integration-mongodb/commit/aad2ddf3ac5fd8ac51e4e65db2f8c515875bd5c8))
* **ci:** use node lts ([9e940f8](https://github.com/discue/paddle-integration-mongodb/commit/9e940f86019e7660878bb0a4e9edcc6ace4eb96c))
* **dependabot:** do not ignore chai anymore ([ef5b890](https://github.com/discue/paddle-integration-mongodb/commit/ef5b890338e6484d7772000008fb30227c759eae))
* **dependabot:** do not ignore chai anymore ([3b0b289](https://github.com/discue/paddle-integration-mongodb/commit/3b0b28949c9498fa5db26f64789db0ac7555ce23))
* **dependabot:** ignore all future chai releases ([b9658c7](https://github.com/discue/paddle-integration-mongodb/commit/b9658c78c14b5e20b7f4c83cb22f9e7fb9bc5b92))
* **deps-dev:** bump @discue/open-telemetry-tracing ([648220f](https://github.com/discue/paddle-integration-mongodb/commit/648220f6b7fad47fc9508c06d3635bd901eca555))
* **deps-dev:** bump @discue/open-telemetry-tracing from 0.10.0 to 1.0.0 ([ce0c481](https://github.com/discue/paddle-integration-mongodb/commit/ce0c481dc30547f8b717477b778a7038ce5bff0a))
* **deps-dev:** bump @discue/open-telemetry-tracing from 1.0.0 to 1.2.0 ([3b509fe](https://github.com/discue/paddle-integration-mongodb/commit/3b509fe7c6cb82465224343d61596ee703a3ca8c))
* **deps-dev:** bump @discue/open-telemetry-tracing from 1.0.0 to 1.2.0 ([446acb0](https://github.com/discue/paddle-integration-mongodb/commit/446acb0e2970f0a5eb383df39228d728b208b4ee))
* **deps-dev:** bump @discue/open-telemetry-tracing from 1.2.0 to 1.3.0 ([f9e7eb1](https://github.com/discue/paddle-integration-mongodb/commit/f9e7eb1faa93793fc56c3d60dc7465d136484eae))
* **deps-dev:** bump @discue/open-telemetry-tracing from 1.2.0 to 1.3.0 ([ce5ce9d](https://github.com/discue/paddle-integration-mongodb/commit/ce5ce9d8e04adf46fdbde37d3b4f1a5755da2568))
* **deps-dev:** bump @discue/open-telemetry-tracing from 1.2.0 to 1.3.0 ([efd1e57](https://github.com/discue/paddle-integration-mongodb/commit/efd1e57b067ae6162f9abd899a4de7878284d83a))
* **deps-dev:** bump @discue/open-telemetry-tracing from 1.3.0 to 1.4.0 ([ff1598a](https://github.com/discue/paddle-integration-mongodb/commit/ff1598a0b2fdab7974ab6404553c90152a9a7837))
* **deps-dev:** bump @discue/open-telemetry-tracing from 1.3.0 to 1.4.0 ([9fec356](https://github.com/discue/paddle-integration-mongodb/commit/9fec3562a65cee5b2f839187a5d80ec917531688))
* **deps-dev:** bump @playwright/test from 1.29.1 to 1.30.0 ([ac2c6ed](https://github.com/discue/paddle-integration-mongodb/commit/ac2c6eda2ec54cc27095049f6bb12490e3f22c08))
* **deps-dev:** bump @playwright/test from 1.30.0 to 1.31.1 ([a1ec3d0](https://github.com/discue/paddle-integration-mongodb/commit/a1ec3d0ce39fb73917687a0a14b1c8f1e19d70e4))
* **deps-dev:** bump @playwright/test from 1.35.0 to 1.35.1 ([3fdc6e6](https://github.com/discue/paddle-integration-mongodb/commit/3fdc6e682d967fbff4fd7a544a37a911cc0a03a0))
* **deps-dev:** bump @playwright/test from 1.35.0 to 1.35.1 ([e77f65b](https://github.com/discue/paddle-integration-mongodb/commit/e77f65b89ebad9f9976e7fdf338b9ed730bd8f6d))
* **deps-dev:** bump @playwright/test from 1.35.1 to 1.37.1 ([d6da63b](https://github.com/discue/paddle-integration-mongodb/commit/d6da63bab76e108f2b6845d7301da01e0de4472e))
* **deps-dev:** bump @playwright/test from 1.37.1 to 1.40.1 ([8a5a6e1](https://github.com/discue/paddle-integration-mongodb/commit/8a5a6e159e80dd90a4d1ad381f7deace43b7a614))
* **deps-dev:** bump @playwright/test from 1.37.1 to 1.40.1 ([aca4c97](https://github.com/discue/paddle-integration-mongodb/commit/aca4c9773e6d7898c31f38518f4568ea3adcd126))
* **deps-dev:** bump @playwright/test from 1.42.1 to 1.43.1 ([c3def81](https://github.com/discue/paddle-integration-mongodb/commit/c3def813f16bc2ff99cf2799d82779c5c5ade16e))
* **deps-dev:** bump @playwright/test from 1.42.1 to 1.43.1 ([d3bcc2d](https://github.com/discue/paddle-integration-mongodb/commit/d3bcc2da20eb36498d45cd9ef01040b9329a6aa8))
* **deps-dev:** bump @playwright/test from 1.43.1 to 1.44.1 ([a1993c8](https://github.com/discue/paddle-integration-mongodb/commit/a1993c8bffba4f2601ee9a1f79bc3184460f518e))
* **deps-dev:** bump @playwright/test from 1.43.1 to 1.44.1 ([325b505](https://github.com/discue/paddle-integration-mongodb/commit/325b505c32ca06e6230884e8ba1257e7caaf3bd3))
* **deps-dev:** bump @playwright/test from 1.44.1 to 1.46.1 ([63350e9](https://github.com/discue/paddle-integration-mongodb/commit/63350e95f9669f9044b1fb680e9e4bcc324809af))
* **deps-dev:** bump @playwright/test from 1.44.1 to 1.46.1 ([692a54a](https://github.com/discue/paddle-integration-mongodb/commit/692a54a8329b7de83ea3ec40f72735f943bddd86))
* **deps-dev:** bump @playwright/test from 1.46.1 to 1.48.2 ([82bf734](https://github.com/discue/paddle-integration-mongodb/commit/82bf734ed5492a2efb2847248312aac498263bbb))
* **deps-dev:** bump @playwright/test from 1.46.1 to 1.48.2 ([ba0d10c](https://github.com/discue/paddle-integration-mongodb/commit/ba0d10c4447f6018b12b8cb04ffe4e126f1f1d87))
* **deps-dev:** bump @playwright/test from 1.46.1 to 1.48.2 ([5db8dd3](https://github.com/discue/paddle-integration-mongodb/commit/5db8dd30ad788307ff2a98ccf883c4049ca51204))
* **deps-dev:** bump @playwright/test from 1.49.0 to 1.49.1 ([e8dae9b](https://github.com/discue/paddle-integration-mongodb/commit/e8dae9bcabc433ee7f371c72a32b5024b557476a))
* **deps-dev:** bump @playwright/test from 1.49.0 to 1.49.1 ([7d0a45e](https://github.com/discue/paddle-integration-mongodb/commit/7d0a45e7b1ac57050dfa99d268add5d19e057249))
* **deps-dev:** bump @playwright/test from 1.49.1 to 1.50.1 ([b6dabbc](https://github.com/discue/paddle-integration-mongodb/commit/b6dabbc7eacc9a7b41a3adb4aee00178df606269))
* **deps-dev:** bump @playwright/test from 1.49.1 to 1.50.1 ([6219cc6](https://github.com/discue/paddle-integration-mongodb/commit/6219cc6732f1d09036f6168016e3ef3d3356b185))
* **deps-dev:** bump @playwright/test from 1.51.1 to 1.52.0 ([cdc16eb](https://github.com/discue/paddle-integration-mongodb/commit/cdc16eba97fc0efd9510eff3c5a9c51d3c293c4f))
* **deps-dev:** bump @playwright/test from 1.51.1 to 1.52.0 ([376e8e4](https://github.com/discue/paddle-integration-mongodb/commit/376e8e453e5c03f6b5c4cab4d9aae3a6bf6c7714))
* **deps-dev:** bump @playwright/test from 1.52.0 to 1.53.2 ([9993e0b](https://github.com/discue/paddle-integration-mongodb/commit/9993e0b6f47b903495c2ae54f9ef716d4b3d08c9))
* **deps-dev:** bump @playwright/test from 1.52.0 to 1.53.2 ([34382c5](https://github.com/discue/paddle-integration-mongodb/commit/34382c556c97e27f9daf16bd93184f18095f303c))
* **deps-dev:** bump @playwright/test from 1.53.2 to 1.54.1 ([968be3c](https://github.com/discue/paddle-integration-mongodb/commit/968be3c874d911c3e2ef92302c08b6c9acca1a39))
* **deps-dev:** bump @playwright/test from 1.53.2 to 1.54.1 ([e76b73f](https://github.com/discue/paddle-integration-mongodb/commit/e76b73fa8d5d4e68bd6292ee48ea8be9d8a00770))
* **deps-dev:** bump @playwright/test from 1.54.2 to 1.56.1 ([207eb01](https://github.com/discue/paddle-integration-mongodb/commit/207eb012f4f9722d9fdaf196b814a58c44fc6ead))
* **deps-dev:** bump @playwright/test from 1.54.2 to 1.56.1 ([0273441](https://github.com/discue/paddle-integration-mongodb/commit/0273441c3738d9f02dbb32b5454c9d0bd5ac7140))
* **deps-dev:** bump @playwright/test from 1.56.1 to 1.57.0 ([b832377](https://github.com/discue/paddle-integration-mongodb/commit/b8323777dc6644b5babece179243759aa17e1abc))
* **deps-dev:** bump @playwright/test from 1.56.1 to 1.57.0 ([1d32ded](https://github.com/discue/paddle-integration-mongodb/commit/1d32ded8c2ca6f1740e83b6c70e07d80b0f08a81))
* **deps-dev:** bump @playwright/test from 1.57.0 to 1.58.1 ([f100971](https://github.com/discue/paddle-integration-mongodb/commit/f100971f63ac666a46d90949d1dd3967aea3440c))
* **deps-dev:** bump @playwright/test from 1.57.0 to 1.58.1 ([fd38563](https://github.com/discue/paddle-integration-mongodb/commit/fd385639c10e715bd020d35c6c556eed62868060))
* **deps-dev:** bump @playwright/test from 1.58.1 to 1.58.2 ([bba672b](https://github.com/discue/paddle-integration-mongodb/commit/bba672b5f7050475724a4257fef4a6525aa5f454))
* **deps-dev:** bump @playwright/test from 1.58.1 to 1.58.2 ([0899f1a](https://github.com/discue/paddle-integration-mongodb/commit/0899f1a6de810579fa55db80f6af518689d8534b))
* **deps-dev:** bump @playwright/test from 1.58.2 to 1.62.1 ([8c77017](https://github.com/discue/paddle-integration-mongodb/commit/8c77017c81149a7026cc5aa7f129573d479c4404))
* **deps-dev:** bump @playwright/test from 1.62.1 to 1.63.0 ([5c113ae](https://github.com/discue/paddle-integration-mongodb/commit/5c113aeca940029a4c859cfac1354461f8912a50))
* **deps-dev:** bump @playwright/test from 1.62.1 to 1.63.0 ([d449441](https://github.com/discue/paddle-integration-mongodb/commit/d4494411d40ae16a7a68f5f79d88993313d7bdac))
* **deps-dev:** bump chai from 4.3.10 to 5.1.0 ([8d3e326](https://github.com/discue/paddle-integration-mongodb/commit/8d3e3260d14fba9788c3e2021e330cde70036b31))
* **deps-dev:** bump chai from 4.3.10 to 5.1.0 ([286b21d](https://github.com/discue/paddle-integration-mongodb/commit/286b21dd0aafa7e0e29b2bd1e8ff2b68db17e1c2))
* **deps-dev:** bump chai from 4.3.7 to 4.3.8 ([5357253](https://github.com/discue/paddle-integration-mongodb/commit/5357253d6fe059e20d449f42ed1b5da0f9afe60c))
* **deps-dev:** bump chai from 4.3.7 to 4.3.8 ([43b8bfb](https://github.com/discue/paddle-integration-mongodb/commit/43b8bfb0eb13ca60b46ea5eea5871d289422c3ac))
* **deps-dev:** bump chai from 4.3.8 to 4.3.10 ([a6f4b02](https://github.com/discue/paddle-integration-mongodb/commit/a6f4b02e50984709c5f106ebe20c02125fb39186))
* **deps-dev:** bump chai from 4.3.8 to 4.3.10 ([78cae80](https://github.com/discue/paddle-integration-mongodb/commit/78cae80ada038fa4d0632d7fb79019fe2d35bd54))
* **deps-dev:** bump chai from 5.1.2 to 5.2.0 ([7434591](https://github.com/discue/paddle-integration-mongodb/commit/74345917c0cb35b7337e3740c26bd3618ed17cbc))
* **deps-dev:** bump chai from 5.1.2 to 5.2.0 ([0f098c9](https://github.com/discue/paddle-integration-mongodb/commit/0f098c95979dc7000bbb70787ea84daeb437b450))
* **deps-dev:** bump chai from 5.2.0 to 5.2.1 ([de0122f](https://github.com/discue/paddle-integration-mongodb/commit/de0122f1181e023a29b1dee1efa698f01e924979))
* **deps-dev:** bump chai from 5.2.0 to 5.2.1 ([0b23b7d](https://github.com/discue/paddle-integration-mongodb/commit/0b23b7df7893ac2888a1479116d46ad074a41e73))
* **deps-dev:** bump chai from 5.2.1 to 6.0.1 ([f64adc5](https://github.com/discue/paddle-integration-mongodb/commit/f64adc5f3d240dd78f7dd4642fad7402f49502c5))
* **deps-dev:** bump chai from 5.2.1 to 6.0.1 ([4afb038](https://github.com/discue/paddle-integration-mongodb/commit/4afb038add7d51ff9bab645a20482019e0ebb75a))
* **deps-dev:** bump chai from 6.0.1 to 6.2.0 ([694223f](https://github.com/discue/paddle-integration-mongodb/commit/694223ffe550b4d55c6252bc060e60d6e26e7681))
* **deps-dev:** bump chai from 6.0.1 to 6.2.0 ([10166a7](https://github.com/discue/paddle-integration-mongodb/commit/10166a727229851e4bc5979617a5a77595a84e4d))
* **deps-dev:** bump chai from 6.2.0 to 6.2.2 ([a7749e7](https://github.com/discue/paddle-integration-mongodb/commit/a7749e7ce5b873775e2e62dbc7a5fcc762c39575))
* **deps-dev:** bump chai from 6.2.0 to 6.2.2 ([bcc66f6](https://github.com/discue/paddle-integration-mongodb/commit/bcc66f6200fb6f6ed2a0db5dc42daf15f3104d23))
* **deps-dev:** bump eslint from 10.1.0 to 10.9.1 ([8f973ad](https://github.com/discue/paddle-integration-mongodb/commit/8f973adb90b72bbe8ed41faba00af0b46cd3a4c7))
* **deps-dev:** bump eslint from 10.1.0 to 10.9.1 ([853c815](https://github.com/discue/paddle-integration-mongodb/commit/853c815ad485860011cb22b66b6269dd8b1f9143))
* **deps-dev:** bump eslint from 10.9.1 to 10.11.0 ([d3da8b5](https://github.com/discue/paddle-integration-mongodb/commit/d3da8b586512da6eb4fc061cb73365041e900527))
* **deps-dev:** bump eslint from 10.9.1 to 10.11.0 ([c9e8964](https://github.com/discue/paddle-integration-mongodb/commit/c9e89643e75e2dfe696f7dcbea0760851b999d65))
* **deps-dev:** bump eslint from 8.30.0 to 8.31.0 ([075e140](https://github.com/discue/paddle-integration-mongodb/commit/075e14036892d8c9df3030db1757c4c967eb2152))
* **deps-dev:** bump eslint from 8.31.0 to 8.33.0 ([f925f25](https://github.com/discue/paddle-integration-mongodb/commit/f925f25845a9a85d7b7b5d782c38a174a9ca17b7))
* **deps-dev:** bump eslint from 8.33.0 to 8.35.0 ([bd322b5](https://github.com/discue/paddle-integration-mongodb/commit/bd322b5eccaac8f5b2de0ad623a814cf25426132))
* **deps-dev:** bump eslint from 8.42.0 to 8.44.0 ([f1686a3](https://github.com/discue/paddle-integration-mongodb/commit/f1686a375148bd2b775d8dbfc86019296b68f6d0))
* **deps-dev:** bump eslint from 8.42.0 to 8.44.0 ([cc2271a](https://github.com/discue/paddle-integration-mongodb/commit/cc2271af3500dfa9cd66cd5bd996345fa28b5f0e))
* **deps-dev:** bump eslint from 8.44.0 to 8.46.0 ([53af93d](https://github.com/discue/paddle-integration-mongodb/commit/53af93d5a2d6b121e1309730ccad29b7aa1f6bb8))
* **deps-dev:** bump eslint from 8.44.0 to 8.46.0 ([d8ba969](https://github.com/discue/paddle-integration-mongodb/commit/d8ba9697410a0cb5cec7b3f4992a23641c6f111e))
* **deps-dev:** bump eslint from 8.46.0 to 8.48.0 ([2f804c8](https://github.com/discue/paddle-integration-mongodb/commit/2f804c8099f05257b527f7c6494432861561839a))
* **deps-dev:** bump eslint from 8.46.0 to 8.48.0 ([c3acf82](https://github.com/discue/paddle-integration-mongodb/commit/c3acf82643829180220ebfbd8b85360afa2df570))
* **deps-dev:** bump eslint from 8.48.0 to 8.50.0 ([e7701e6](https://github.com/discue/paddle-integration-mongodb/commit/e7701e68a8e48f4d57d895ed91bb2637f15932b8))
* **deps-dev:** bump eslint from 8.48.0 to 8.50.0 ([0518e52](https://github.com/discue/paddle-integration-mongodb/commit/0518e527841270b65195eae7e88f8180834a28d6))
* **deps-dev:** bump eslint from 8.50.0 to 8.54.0 ([dd821f6](https://github.com/discue/paddle-integration-mongodb/commit/dd821f6cb567610acf7454e3a04456a254ba4634))
* **deps-dev:** bump eslint from 8.50.0 to 8.54.0 ([06bdf9b](https://github.com/discue/paddle-integration-mongodb/commit/06bdf9bf481bfc77b69656d685adaae4a235a7a7))
* **deps-dev:** bump eslint from 8.54.0 to 8.56.0 ([0008a53](https://github.com/discue/paddle-integration-mongodb/commit/0008a533745abe7fc9af662931a459afd6539854))
* **deps-dev:** bump eslint from 8.54.0 to 8.56.0 ([e6d428a](https://github.com/discue/paddle-integration-mongodb/commit/e6d428a97e390fe881724f130be97037de6a3c55))
* **deps-dev:** bump eslint from 9.0.0 to 9.1.1 ([f988df4](https://github.com/discue/paddle-integration-mongodb/commit/f988df464d3f7c5bea67f09e7ba343226127bc47))
* **deps-dev:** bump eslint from 9.0.0 to 9.1.1 ([7b86fe9](https://github.com/discue/paddle-integration-mongodb/commit/7b86fe9caf1873b69a5b33353afe396cca75ac56))
* **deps-dev:** bump eslint from 9.1.1 to 9.6.0 ([2e5cd57](https://github.com/discue/paddle-integration-mongodb/commit/2e5cd579f4da02a8845dcede870caa3ae5047fdb))
* **deps-dev:** bump eslint from 9.1.1 to 9.6.0 ([91cf0de](https://github.com/discue/paddle-integration-mongodb/commit/91cf0de74a2296bf932c4ef0ac160cde5a8305b7))
* **deps-dev:** bump eslint from 9.11.1 to 9.16.0 ([5b2b772](https://github.com/discue/paddle-integration-mongodb/commit/5b2b7729d8c4d90ec6197234d2a085a8468b9ff2))
* **deps-dev:** bump eslint from 9.11.1 to 9.16.0 ([e17a32f](https://github.com/discue/paddle-integration-mongodb/commit/e17a32fe6e094f5053c258663a9539842a6acdb1))
* **deps-dev:** bump eslint from 9.11.1 to 9.16.0 ([453e844](https://github.com/discue/paddle-integration-mongodb/commit/453e844d104302d5503db7f23287de9c32b7007b))
* **deps-dev:** bump eslint from 9.16.0 to 9.23.0 ([119fe43](https://github.com/discue/paddle-integration-mongodb/commit/119fe4377047805d47befe63ab7df3ea447c5af6))
* **deps-dev:** bump eslint from 9.16.0 to 9.23.0 ([95cc16b](https://github.com/discue/paddle-integration-mongodb/commit/95cc16be65db6d1cdb2847e5e0d52ba19d4db904))
* **deps-dev:** bump eslint from 9.23.0 to 9.25.1 ([6069591](https://github.com/discue/paddle-integration-mongodb/commit/60695913284042601af5923da226a145a542aa42))
* **deps-dev:** bump eslint from 9.23.0 to 9.25.1 ([c23d172](https://github.com/discue/paddle-integration-mongodb/commit/c23d17270c46e85cfeb98e5766f34fe73693b98f))
* **deps-dev:** bump eslint from 9.25.1 to 9.28.0 ([92c154b](https://github.com/discue/paddle-integration-mongodb/commit/92c154beac1edb31a13da3db52989d5fc100d3b2))
* **deps-dev:** bump eslint from 9.25.1 to 9.28.0 ([ef4917b](https://github.com/discue/paddle-integration-mongodb/commit/ef4917b22037dd547fc04a75dc412954da1fccdd))
* **deps-dev:** bump eslint from 9.28.0 to 9.30.0 ([a326760](https://github.com/discue/paddle-integration-mongodb/commit/a326760281d69acce2fe19b91be271a76304760d))
* **deps-dev:** bump eslint from 9.28.0 to 9.30.0 ([f2d0965](https://github.com/discue/paddle-integration-mongodb/commit/f2d0965066bf8097af0fa7d3224ccdf14184bb24))
* **deps-dev:** bump eslint from 9.30.0 to 9.34.0 ([960b348](https://github.com/discue/paddle-integration-mongodb/commit/960b3480bda9979252398d99398ab4846e5f29ba))
* **deps-dev:** bump eslint from 9.30.0 to 9.34.0 ([d2a6777](https://github.com/discue/paddle-integration-mongodb/commit/d2a6777d76eff35e5bb93b497ffe0294f209e9a3))
* **deps-dev:** bump eslint from 9.34.0 to 9.39.1 ([7930171](https://github.com/discue/paddle-integration-mongodb/commit/7930171c12e21af9a53de000d0070c9c94380eda))
* **deps-dev:** bump eslint from 9.34.0 to 9.39.1 ([03024f6](https://github.com/discue/paddle-integration-mongodb/commit/03024f64eae70fa4b5ddbfde9142832d79d524e8))
* **deps-dev:** bump eslint from 9.6.0 to 9.8.0 ([144ee91](https://github.com/discue/paddle-integration-mongodb/commit/144ee91171da3f894877aa9168cf4e4a461ef912))
* **deps-dev:** bump eslint from 9.6.0 to 9.8.0 ([787c015](https://github.com/discue/paddle-integration-mongodb/commit/787c015d9450f74f67d041386124a43373ccf166))
* **deps-dev:** bump eslint from 9.8.0 to 9.11.1 ([c917c98](https://github.com/discue/paddle-integration-mongodb/commit/c917c981c9330cddf7eb925d116f7eb147443a85))
* **deps-dev:** bump eslint from 9.8.0 to 9.11.1 ([6f079ee](https://github.com/discue/paddle-integration-mongodb/commit/6f079ee2a009322098aea72a1da5013775aa0474))
* **deps-dev:** bump express from 4.18.2 to 4.18.3 ([bb4b580](https://github.com/discue/paddle-integration-mongodb/commit/bb4b580bd3a0e797e1b9bd23b0f024b38ada3635))
* **deps-dev:** bump express from 4.18.2 to 4.18.3 ([c60bc78](https://github.com/discue/paddle-integration-mongodb/commit/c60bc78754e32d61ffe67e770ff84ad4e8136fd3))
* **deps-dev:** bump express from 4.18.3 to 4.19.2 ([0236f61](https://github.com/discue/paddle-integration-mongodb/commit/0236f61d2526fa5434dd1deb862aa831d10c9bc4))
* **deps-dev:** bump express from 4.18.3 to 4.19.2 ([8a74314](https://github.com/discue/paddle-integration-mongodb/commit/8a743143002df61df53bf75a09a46fd76351cf41))
* **deps-dev:** bump express from 4.19.2 to 4.21.0 ([50dd106](https://github.com/discue/paddle-integration-mongodb/commit/50dd1060bddf07865e40f2049e7d33d0a18a6d9b))
* **deps-dev:** bump express from 4.19.2 to 4.21.0 ([8842a3e](https://github.com/discue/paddle-integration-mongodb/commit/8842a3e471a214617f962e106faa394900804a9b))
* **deps-dev:** bump express from 4.21.0 to 4.21.1 ([16b44ef](https://github.com/discue/paddle-integration-mongodb/commit/16b44ef40dc1d54d74736dea598bb61050c27558))
* **deps-dev:** bump express from 4.21.0 to 4.21.1 ([6d17379](https://github.com/discue/paddle-integration-mongodb/commit/6d1737961fe8d14ac406cbe903cc20a3d3c9a224))
* **deps-dev:** bump express from 4.21.1 to 4.21.2 ([44f9d7d](https://github.com/discue/paddle-integration-mongodb/commit/44f9d7d7907bee701d5eeb79fbaf8deba838dc47))
* **deps-dev:** bump express from 4.21.1 to 4.21.2 ([cc38395](https://github.com/discue/paddle-integration-mongodb/commit/cc38395afc1edaacc15be048f4cbd602e357a4ab))
* **deps-dev:** bump express from 5.1.0 to 5.2.1 ([e6f10b4](https://github.com/discue/paddle-integration-mongodb/commit/e6f10b4c30bf6be08a60e1853afaba3e0daaec9f))
* **deps-dev:** bump express from 5.1.0 to 5.2.1 ([9c671b4](https://github.com/discue/paddle-integration-mongodb/commit/9c671b417f2db04d01a0996b71280868cfd815ad))
* **deps-dev:** bump firebase-tools from 11.19.0 to 11.22.0 ([0159a7a](https://github.com/discue/paddle-integration-mongodb/commit/0159a7a547df8152330d26414c12c15953dfdc01))
* **deps-dev:** bump firebase-tools from 11.19.0 to 11.22.0 ([cd5f827](https://github.com/discue/paddle-integration-mongodb/commit/cd5f8273456c54de9debd014f41c05f7455b2a03))
* **deps-dev:** bump firebase-tools from 11.22.0 to 11.24.0 ([b178099](https://github.com/discue/paddle-integration-mongodb/commit/b178099fd5d8861ff7791d47af2d8efd8adf8edb))
* **deps-dev:** bump mocha from 10.3.0 to 10.4.0 ([505e591](https://github.com/discue/paddle-integration-mongodb/commit/505e591efc424b3b97ef090badc2f0ec4395eb5e))
* **deps-dev:** bump mocha from 10.3.0 to 10.4.0 ([3ad8fdb](https://github.com/discue/paddle-integration-mongodb/commit/3ad8fdbb161ef9834565a1d7e661d25c60a3f22d))
* **deps-dev:** bump mocha from 10.4.0 to 10.5.2 ([5e0280e](https://github.com/discue/paddle-integration-mongodb/commit/5e0280ee235eed3c8c8ebe398de4c08a8624e234))
* **deps-dev:** bump mocha from 10.4.0 to 10.5.2 ([ed183a4](https://github.com/discue/paddle-integration-mongodb/commit/ed183a4f4c28d3880fc82552e54ab754a403f147))
* **deps-dev:** bump mocha from 10.5.2 to 10.7.0 ([c4c5a4b](https://github.com/discue/paddle-integration-mongodb/commit/c4c5a4b706f57cc4070c466fa3491c0ac3a77043))
* **deps-dev:** bump mocha from 10.5.2 to 10.7.0 ([1f1bfed](https://github.com/discue/paddle-integration-mongodb/commit/1f1bfed81de459581119ebbe6c7d503caec574bf))
* **deps-dev:** bump mocha from 10.7.0 to 10.8.2 ([056531a](https://github.com/discue/paddle-integration-mongodb/commit/056531af441c8e1dfd04c090f3768f28a30f9b80))
* **deps-dev:** bump mocha from 10.7.0 to 10.8.2 ([abaf50e](https://github.com/discue/paddle-integration-mongodb/commit/abaf50e4e7898d6cbf2b4f38131d1ab3ec37370d))
* **deps-dev:** bump mocha from 10.7.0 to 10.8.2 ([08d2aaa](https://github.com/discue/paddle-integration-mongodb/commit/08d2aaa632d92b25d31edffc80cb728d53ff0e26))
* **deps-dev:** bump mocha from 11.0.1 to 11.1.0 ([44b29b9](https://github.com/discue/paddle-integration-mongodb/commit/44b29b9c9e019b05a5df301d1d435a60e03b48fe))
* **deps-dev:** bump mocha from 11.0.1 to 11.1.0 ([90e89a6](https://github.com/discue/paddle-integration-mongodb/commit/90e89a6c9c22bc2e4098d9ed58d7ca09033259f1))
* **deps-dev:** bump mocha from 11.1.0 to 11.5.0 ([84d54bd](https://github.com/discue/paddle-integration-mongodb/commit/84d54bd4c6c97621edc581d5d30a9bdcaa36dea2))
* **deps-dev:** bump mocha from 11.1.0 to 11.5.0 ([030175b](https://github.com/discue/paddle-integration-mongodb/commit/030175b70e469ed090b695e2ebba509cc4c7c84e))
* **deps-dev:** bump mocha from 11.5.0 to 11.7.1 ([b7361e1](https://github.com/discue/paddle-integration-mongodb/commit/b7361e186be25d13abe49e20eca5ef52219bcf67))
* **deps-dev:** bump mocha from 11.5.0 to 11.7.1 ([02ae07e](https://github.com/discue/paddle-integration-mongodb/commit/02ae07e9723cc7cc925fbc44ce40d4f0b48c96c9))
* **deps-dev:** bump mocha from 11.7.1 to 11.7.5 ([b2887eb](https://github.com/discue/paddle-integration-mongodb/commit/b2887ebf44a174e7692b64e1f3d379eb2594f0df))
* **deps-dev:** bump mocha from 11.7.1 to 11.7.5 ([a1eb3d2](https://github.com/discue/paddle-integration-mongodb/commit/a1eb3d2600c2b620c16224342bc59c2e85eb6a66))
* **deps-dev:** bump mongodb-memory-server from 10.0.0 to 10.0.1 ([2be24d5](https://github.com/discue/paddle-integration-mongodb/commit/2be24d5ac38e1047b2fd6faacceb0b8bc65dd3cf))
* **deps-dev:** bump mongodb-memory-server from 10.0.0 to 10.0.1 ([d544f44](https://github.com/discue/paddle-integration-mongodb/commit/d544f440075d39fba92fc95de5add840a2c39b31))
* **deps-dev:** bump mongodb-memory-server from 10.0.1 to 10.1.2 ([401a1ef](https://github.com/discue/paddle-integration-mongodb/commit/401a1efa3e0c7a8027ba6867de695c6ab691e78a))
* **deps-dev:** bump mongodb-memory-server from 10.0.1 to 10.1.2 ([fc7eff0](https://github.com/discue/paddle-integration-mongodb/commit/fc7eff02329c64973031038cac258188c0bcef82))
* **deps-dev:** bump mongodb-memory-server from 10.1.2 to 10.1.3 ([b8b36cb](https://github.com/discue/paddle-integration-mongodb/commit/b8b36cbd3853655c048cbc20a5f2d343ea2dced5))
* **deps-dev:** bump mongodb-memory-server from 10.1.2 to 10.1.3 ([a9266e1](https://github.com/discue/paddle-integration-mongodb/commit/a9266e147846ea7db4235db5d6ad45020964a5bc))
* **deps-dev:** bump mongodb-memory-server from 10.1.3 to 10.1.4 ([0cf04a5](https://github.com/discue/paddle-integration-mongodb/commit/0cf04a5d6a3c84959aa51f1addbcbce8b0ce3097))
* **deps-dev:** bump mongodb-memory-server from 10.1.3 to 10.1.4 ([0b595c8](https://github.com/discue/paddle-integration-mongodb/commit/0b595c8f1a3a221291e70c95369d6d19f236fbcd))
* **deps-dev:** bump mongodb-memory-server from 10.1.4 to 10.2.1 ([250c601](https://github.com/discue/paddle-integration-mongodb/commit/250c60185f3febfe70a4953eb4574ba9ba9ddd48))
* **deps-dev:** bump mongodb-memory-server from 10.1.4 to 10.2.1 ([52d8df7](https://github.com/discue/paddle-integration-mongodb/commit/52d8df76c6c48eaea321156aa1339d216fb210e3))
* **deps-dev:** bump mongodb-memory-server from 10.2.1 to 10.3.0 ([eddf4f6](https://github.com/discue/paddle-integration-mongodb/commit/eddf4f6660719b1609f0c5a69af4e57a5469dd93))
* **deps-dev:** bump mongodb-memory-server from 10.2.1 to 10.3.0 ([ba42be1](https://github.com/discue/paddle-integration-mongodb/commit/ba42be138ac15673405028172cb29cdcc3db0eff))
* **deps-dev:** bump mongodb-memory-server from 10.3.0 to 11.0.1 ([1692b5c](https://github.com/discue/paddle-integration-mongodb/commit/1692b5cd5ae691cfbfb9352d7ff182fc926f348c))
* **deps-dev:** bump mongodb-memory-server from 10.3.0 to 11.0.1 ([ed563c3](https://github.com/discue/paddle-integration-mongodb/commit/ed563c35590dcafe5dd349e2947f4b03c9055f8a))
* **deps-dev:** bump mongodb-memory-server from 11.0.1 to 11.3.0 ([4581b72](https://github.com/discue/paddle-integration-mongodb/commit/4581b72b1b79adcf6a3f87b338b714f3e7c8f935))
* **deps-dev:** bump mongodb-memory-server from 11.0.1 to 11.3.0 ([e7d5e63](https://github.com/discue/paddle-integration-mongodb/commit/e7d5e63ae536df0c6bd3abd43daf811fcc690752))
* **deps-dev:** bump mongodb-memory-server from 8.13.0 to 8.15.1 ([d6d080e](https://github.com/discue/paddle-integration-mongodb/commit/d6d080ecb1618b50c5f94ce99f5c0f129ff3da5b))
* **deps-dev:** bump mongodb-memory-server from 8.13.0 to 8.15.1 ([0883c4b](https://github.com/discue/paddle-integration-mongodb/commit/0883c4b444cdff43b165fe97a33c18d93e8f8457))
* **deps-dev:** bump mongodb-memory-server from 8.15.1 to 9.0.1 ([7afbc30](https://github.com/discue/paddle-integration-mongodb/commit/7afbc30c673efe7c2a4e270136d1e8b4ba65eb82))
* **deps-dev:** bump mongodb-memory-server from 8.15.1 to 9.0.1 ([cf3a275](https://github.com/discue/paddle-integration-mongodb/commit/cf3a275eb43083240d8a14d0211604783109f872))
* **deps-dev:** bump mongodb-memory-server from 9.0.1 to 9.1.1 ([9dce61d](https://github.com/discue/paddle-integration-mongodb/commit/9dce61d5215eddc58b012905b47f9e232d69ecb9))
* **deps-dev:** bump mongodb-memory-server from 9.0.1 to 9.1.1 ([1017a99](https://github.com/discue/paddle-integration-mongodb/commit/1017a991bbb491a76b730f105d7494eea8633585))
* **deps-dev:** bump mongodb-memory-server from 9.1.1 to 9.1.3 ([60fee51](https://github.com/discue/paddle-integration-mongodb/commit/60fee5177b971ffbb33b254ee302d8e69ea32522))
* **deps-dev:** bump mongodb-memory-server from 9.1.1 to 9.1.3 ([739968c](https://github.com/discue/paddle-integration-mongodb/commit/739968cb691aedd7617602a9cf5efe66df7a0d9b))
* **deps-dev:** bump mongodb-memory-server from 9.1.3 to 9.1.6 ([19fd65a](https://github.com/discue/paddle-integration-mongodb/commit/19fd65ad8a3cbcd951cf0dd924945e9ce952a639))
* **deps-dev:** bump mongodb-memory-server from 9.1.3 to 9.1.6 ([82d12a9](https://github.com/discue/paddle-integration-mongodb/commit/82d12a91db877ed90368fabc041fcf5d82a816d3))
* **deps-dev:** bump mongodb-memory-server from 9.1.7 to 9.1.8 ([9738797](https://github.com/discue/paddle-integration-mongodb/commit/97387974918193a9304ec6a561d449c82f4063ef))
* **deps-dev:** bump mongodb-memory-server from 9.1.7 to 9.1.8 ([57bc5db](https://github.com/discue/paddle-integration-mongodb/commit/57bc5db131b563f779f080aa206a986c8f687b20))
* **deps-dev:** bump mongodb-memory-server from 9.1.8 to 9.2.0 ([94bba5b](https://github.com/discue/paddle-integration-mongodb/commit/94bba5ba085859c8f5cb9b47cdae271332759365))
* **deps-dev:** bump mongodb-memory-server from 9.1.8 to 9.2.0 ([83f59e6](https://github.com/discue/paddle-integration-mongodb/commit/83f59e64fd2d8b63a47d801fbd3275b692287c5c))
* **deps-dev:** bump mongodb-memory-server from 9.2.0 to 10.0.0 ([525ac6a](https://github.com/discue/paddle-integration-mongodb/commit/525ac6a216218315fd93279cd4dc4ac8a73c100e))
* **deps-dev:** bump mongodb-memory-server from 9.2.0 to 10.0.0 ([fb89e64](https://github.com/discue/paddle-integration-mongodb/commit/fb89e6428b9611d55113f476cb420e5adda38bd5))
* **deps-dev:** bump nodemon from 2.0.22 to 3.0.1 ([bd6171d](https://github.com/discue/paddle-integration-mongodb/commit/bd6171de87b29380375f127aad2fb00c4e91746d))
* **deps-dev:** bump nodemon from 2.0.22 to 3.0.1 ([ee85eb8](https://github.com/discue/paddle-integration-mongodb/commit/ee85eb8c060370abc35cc3bcb2a828dc09d48c3c))
* **deps-dev:** bump nodemon from 3.0.1 to 3.0.3 ([24b345e](https://github.com/discue/paddle-integration-mongodb/commit/24b345e22aa96f493f8846f13f9ac8e4a60043dc))
* **deps-dev:** bump nodemon from 3.0.1 to 3.0.3 ([e6ad265](https://github.com/discue/paddle-integration-mongodb/commit/e6ad2653e13fb8c3be2c1af90b6d548a6aa4f8b2))
* **deps-dev:** bump nodemon from 3.1.0 to 3.1.2 ([b52622b](https://github.com/discue/paddle-integration-mongodb/commit/b52622bddb5dd956a7b7fa628ec52cee1f43e518))
* **deps-dev:** bump nodemon from 3.1.0 to 3.1.2 ([8f30c61](https://github.com/discue/paddle-integration-mongodb/commit/8f30c6112690b11ce5b816ce4cdfd837234259dd))
* **deps-dev:** bump nodemon from 3.1.10 to 3.1.11 ([2e7a792](https://github.com/discue/paddle-integration-mongodb/commit/2e7a7924b8caddd6950737819a8ddb61ad953aea))
* **deps-dev:** bump nodemon from 3.1.10 to 3.1.11 ([37ab1c9](https://github.com/discue/paddle-integration-mongodb/commit/37ab1c9728a94d5970cd1518e174649c6cf88528))
* **deps-dev:** bump nodemon from 3.1.2 to 3.1.7 ([552ae0f](https://github.com/discue/paddle-integration-mongodb/commit/552ae0fd7ee95037783de7530ebc01823fd900d1))
* **deps-dev:** bump nodemon from 3.1.2 to 3.1.7 ([85a315b](https://github.com/discue/paddle-integration-mongodb/commit/85a315b2d1c4cdd56a053a9e8ca1437adcfdc5c7))
* **deps-dev:** bump nodemon from 3.1.7 to 3.1.9 ([9a17ac0](https://github.com/discue/paddle-integration-mongodb/commit/9a17ac0b9c8cdeabca4a28dd1a5e418ba22c0c50))
* **deps-dev:** bump nodemon from 3.1.7 to 3.1.9 ([b410df3](https://github.com/discue/paddle-integration-mongodb/commit/b410df352bc4239be981f0909f86f263a7215df2))
* **deps-dev:** bump nodemon from 3.1.9 to 3.1.10 ([cfc4d81](https://github.com/discue/paddle-integration-mongodb/commit/cfc4d8162976c1a6b1e2cead6385923b9d589fea))
* **deps-dev:** bump nodemon from 3.1.9 to 3.1.10 ([26097b7](https://github.com/discue/paddle-integration-mongodb/commit/26097b77db44858302da05d530d63fc139cb60ae))
* **deps-dev:** bump puppeteer from 19.4.1 to 19.6.2 ([18795f7](https://github.com/discue/paddle-integration-mongodb/commit/18795f7b2289695ebe360361f622bcc7d22ee00e))
* **deps-dev:** bump puppeteer from 19.4.1 to 19.6.2 ([8b16085](https://github.com/discue/paddle-integration-mongodb/commit/8b1608587b6dec760040a831fb35854b630a4a2c))
* **deps-dev:** bump puppeteer from 19.6.3 to 19.7.2 ([321de3a](https://github.com/discue/paddle-integration-mongodb/commit/321de3a9f833b8af7322cb9aaeeffe22e279e914))
* **deps-dev:** bump puppeteer from 20.4.0 to 20.5.0 ([ad5e082](https://github.com/discue/paddle-integration-mongodb/commit/ad5e08254dd295eead9fb411a14a804ac891a551))
* **deps-dev:** bump puppeteer from 20.4.0 to 20.5.0 ([c44dd79](https://github.com/discue/paddle-integration-mongodb/commit/c44dd79b6d67f41a33f9b90d044962d043567a11))
* **deps-dev:** bump puppeteer from 20.5.0 to 20.7.4 ([f9928e8](https://github.com/discue/paddle-integration-mongodb/commit/f9928e8073365a4fd2cb9a14d7592fb474b2a79c))
* **deps-dev:** bump puppeteer from 20.5.0 to 20.7.4 ([7d8d6cb](https://github.com/discue/paddle-integration-mongodb/commit/7d8d6cb055e3918019126bfc94dbeae88ef4da2f))
* **deps-dev:** bump puppeteer from 20.7.4 to 20.9.0 ([4bba161](https://github.com/discue/paddle-integration-mongodb/commit/4bba161bfa58c6da7306a0c53af5cc353371e1cf))
* **deps-dev:** bump puppeteer from 20.7.4 to 20.9.0 ([7fd5f4a](https://github.com/discue/paddle-integration-mongodb/commit/7fd5f4a09729635df2db4675b45f82a004c0f428))
* **deps-dev:** bump puppeteer from 20.9.0 to 21.3.6 ([d6388a5](https://github.com/discue/paddle-integration-mongodb/commit/d6388a517902b6392fbebcefda097b4b5e20d4fb))
* **deps-dev:** bump puppeteer from 20.9.0 to 21.3.6 ([43b4c38](https://github.com/discue/paddle-integration-mongodb/commit/43b4c387c8b94336ae720c14c83011866ceb5f00))
* **deps-dev:** bump puppeteer from 21.3.6 to 21.5.2 ([942194b](https://github.com/discue/paddle-integration-mongodb/commit/942194b321d44567eaa588d04a83342553749e27))
* **deps-dev:** bump puppeteer from 21.3.6 to 21.5.2 ([554ccb4](https://github.com/discue/paddle-integration-mongodb/commit/554ccb4174759657e84d703021df0f64122702c0))
* **deps-dev:** bump puppeteer from 21.5.2 to 22.0.0 ([108f167](https://github.com/discue/paddle-integration-mongodb/commit/108f16766dd8d40fd0c07a1786a2072e5b79c101))
* **deps-dev:** bump puppeteer from 21.5.2 to 22.0.0 ([1934fff](https://github.com/discue/paddle-integration-mongodb/commit/1934fffe39c8a1131ef401f536bd8c3de2e287f4))
* **deps-dev:** bump puppeteer from 22.0.0 to 22.3.0 ([5c3b594](https://github.com/discue/paddle-integration-mongodb/commit/5c3b594ffa414c78ed31328655371cdd2b73bb5a))
* **deps-dev:** bump puppeteer from 22.0.0 to 22.3.0 ([9aae365](https://github.com/discue/paddle-integration-mongodb/commit/9aae365fc0e092173c26fa3b2990f9ddd468ef7b))
* **deps-dev:** bump puppeteer from 22.10.0 to 22.12.1 ([772c716](https://github.com/discue/paddle-integration-mongodb/commit/772c716b425d923422dcc03e7a1f6bc678841f3f))
* **deps-dev:** bump puppeteer from 22.10.0 to 22.12.1 ([27238fe](https://github.com/discue/paddle-integration-mongodb/commit/27238fe9bce319d610296de21ec0d3a575ac779a))
* **deps-dev:** bump puppeteer from 22.12.1 to 23.2.1 ([93e3cf6](https://github.com/discue/paddle-integration-mongodb/commit/93e3cf639862e8203f4de63660f27ba4032ab65a))
* **deps-dev:** bump puppeteer from 22.12.1 to 23.2.1 ([556a5bd](https://github.com/discue/paddle-integration-mongodb/commit/556a5bd41aa17ad650f8551294e42e972ff48e75))
* **deps-dev:** bump puppeteer from 22.5.0 to 22.6.1 ([608b48b](https://github.com/discue/paddle-integration-mongodb/commit/608b48b0a686e0b8a70b880aa435d7a9585cb8be))
* **deps-dev:** bump puppeteer from 22.5.0 to 22.6.1 ([50024b4](https://github.com/discue/paddle-integration-mongodb/commit/50024b4e811a39c4831c50ae9bf7c8337daaa44d))
* **deps-dev:** bump puppeteer from 22.6.1 to 22.7.1 ([dc3ff38](https://github.com/discue/paddle-integration-mongodb/commit/dc3ff38a84652c484556c029c9f65222ca1e0cf5))
* **deps-dev:** bump puppeteer from 22.6.1 to 22.7.1 ([56f94b4](https://github.com/discue/paddle-integration-mongodb/commit/56f94b417633e11e7de2bec65ac3b077aa8addf8))
* **deps-dev:** bump puppeteer from 22.7.1 to 22.10.0 ([d4270cc](https://github.com/discue/paddle-integration-mongodb/commit/d4270cc8c8df83c6927e2bbb0a71a945ecbbc022))
* **deps-dev:** bump puppeteer from 22.7.1 to 22.10.0 ([2c7907c](https://github.com/discue/paddle-integration-mongodb/commit/2c7907c1014874514f8a5a3b512121a8f56ad76d))
* **deps-dev:** bump puppeteer from 23.11.1 to 24.1.1 ([3995ff6](https://github.com/discue/paddle-integration-mongodb/commit/3995ff61b222ed68654efe65606a0e7219082e86))
* **deps-dev:** bump puppeteer from 23.11.1 to 24.1.1 ([ae7e239](https://github.com/discue/paddle-integration-mongodb/commit/ae7e239389c5a130d9ba4a223c7043e985e47aaa))
* **deps-dev:** bump puppeteer from 23.2.1 to 23.4.1 ([fcd8343](https://github.com/discue/paddle-integration-mongodb/commit/fcd8343d81c19d16cd96c7ec0a1ffe14537cb731))
* **deps-dev:** bump puppeteer from 23.2.1 to 23.4.1 ([150a91b](https://github.com/discue/paddle-integration-mongodb/commit/150a91bcb2eaab57024047c24a1a1dc8f9598060))
* **deps-dev:** bump puppeteer from 23.4.1 to 23.6.1 ([0102fd2](https://github.com/discue/paddle-integration-mongodb/commit/0102fd24bf1dd18e219fedc4aeb6fdab5437692b))
* **deps-dev:** bump puppeteer from 23.4.1 to 23.6.1 ([fd146a9](https://github.com/discue/paddle-integration-mongodb/commit/fd146a9a0275425dcedc5f8874b1c4c8215126e4))
* **deps-dev:** bump puppeteer from 23.4.1 to 23.6.1 ([e329705](https://github.com/discue/paddle-integration-mongodb/commit/e3297052eeb9acf33ea7908554aefe4af0577ce2))
* **deps-dev:** bump puppeteer from 23.6.1 to 23.9.0 ([740cedb](https://github.com/discue/paddle-integration-mongodb/commit/740cedb51daeb3d8337d237458bd7feca89c81a4))
* **deps-dev:** bump puppeteer from 23.6.1 to 23.9.0 ([e70f4a5](https://github.com/discue/paddle-integration-mongodb/commit/e70f4a587378afe60ed423d620342492747e52d9))
* **deps-dev:** bump puppeteer from 23.9.0 to 23.11.1 ([76cf278](https://github.com/discue/paddle-integration-mongodb/commit/76cf2782f8559c451384f520781d58b184ec810b))
* **deps-dev:** bump puppeteer from 23.9.0 to 23.11.1 ([f75ad33](https://github.com/discue/paddle-integration-mongodb/commit/f75ad33add7bfa31dee9fdd164d34bf6e28b4cb3))
* **deps-dev:** bump puppeteer from 24.1.1 to 24.3.0 ([b5f02cb](https://github.com/discue/paddle-integration-mongodb/commit/b5f02cb223801b06de2160ed1b9378eddfb32d22))
* **deps-dev:** bump puppeteer from 24.1.1 to 24.3.0 ([2bd3673](https://github.com/discue/paddle-integration-mongodb/commit/2bd3673485a776beb20c8b5418bd06e7babde42d))
* **deps-dev:** bump puppeteer from 24.11.1 to 24.15.0 ([7297dd7](https://github.com/discue/paddle-integration-mongodb/commit/7297dd731cec5a8afc722b7875155700277487bd))
* **deps-dev:** bump puppeteer from 24.11.1 to 24.15.0 ([0e2c8c3](https://github.com/discue/paddle-integration-mongodb/commit/0e2c8c3825952437411f2aeba202935f8c2a95f0))
* **deps-dev:** bump puppeteer from 24.15.0 to 24.17.1 ([32d9586](https://github.com/discue/paddle-integration-mongodb/commit/32d9586353fdacee305ba19cafaf22fb34bda64e))
* **deps-dev:** bump puppeteer from 24.15.0 to 24.17.1 ([1dfec8d](https://github.com/discue/paddle-integration-mongodb/commit/1dfec8db8cf57cd931a877d7618236f5052a0b96))
* **deps-dev:** bump puppeteer from 24.18.0 to 24.22.3 ([ec8cac2](https://github.com/discue/paddle-integration-mongodb/commit/ec8cac27fb3aa2f590d21cc8a2a970f7e6ee7037))
* **deps-dev:** bump puppeteer from 24.18.0 to 24.22.3 ([d773f95](https://github.com/discue/paddle-integration-mongodb/commit/d773f958c853383add4d7ec4f353f994fe23961b))
* **deps-dev:** bump puppeteer from 24.22.3 to 24.27.0 ([3f365fa](https://github.com/discue/paddle-integration-mongodb/commit/3f365fa0fb4ea05ffcd608b3d292b81687f8d873))
* **deps-dev:** bump puppeteer from 24.22.3 to 24.27.0 ([308d5a7](https://github.com/discue/paddle-integration-mongodb/commit/308d5a77c3062848ad5c142ceaebd9ca96f68e11))
* **deps-dev:** bump puppeteer from 24.27.0 to 24.31.0 ([f488c2d](https://github.com/discue/paddle-integration-mongodb/commit/f488c2d2872356f20ccd9573cca88795e6a526e2))
* **deps-dev:** bump puppeteer from 24.27.0 to 24.31.0 ([986d9b9](https://github.com/discue/paddle-integration-mongodb/commit/986d9b9215e058b3578faaa7cfaee6e111de8ab3))
* **deps-dev:** bump puppeteer from 24.3.0 to 24.4.0 ([c9a4c5f](https://github.com/discue/paddle-integration-mongodb/commit/c9a4c5fe165c9dade222d7f4cf8e48982920e1f4))
* **deps-dev:** bump puppeteer from 24.3.0 to 24.4.0 ([53e22d0](https://github.com/discue/paddle-integration-mongodb/commit/53e22d07d8189e1cc94b3709ba4dc35a0b886171))
* **deps-dev:** bump puppeteer from 24.31.0 to 24.36.1 ([cc3d964](https://github.com/discue/paddle-integration-mongodb/commit/cc3d964d91c8aeb9d67cc89d85c1148fa216150b))
* **deps-dev:** bump puppeteer from 24.31.0 to 24.36.1 ([7feb338](https://github.com/discue/paddle-integration-mongodb/commit/7feb338518ced23d62b1ad41d036f9845b0e7b7a))
* **deps-dev:** bump puppeteer from 24.40.0 to 25.10.0 ([451eaf3](https://github.com/discue/paddle-integration-mongodb/commit/451eaf381a8d83bd0ad34dac99e3a920cd380118))
* **deps-dev:** bump puppeteer from 24.40.0 to 25.10.0 ([b977816](https://github.com/discue/paddle-integration-mongodb/commit/b9778169c721810f322de639c6a178e3793a9976))
* **deps-dev:** bump puppeteer from 24.6.0 to 24.7.2 ([c695aa5](https://github.com/discue/paddle-integration-mongodb/commit/c695aa56b4a7039a844868d2aa17c2c90e4ca31b))
* **deps-dev:** bump puppeteer from 24.6.0 to 24.7.2 ([d6bff8c](https://github.com/discue/paddle-integration-mongodb/commit/d6bff8ca41445e3817faa6eea7b94050c8dba5dd))
* **deps-dev:** bump puppeteer from 24.7.2 to 24.9.0 ([8e1efbd](https://github.com/discue/paddle-integration-mongodb/commit/8e1efbd338692ab411b636bc7ced018fb7f788d7))
* **deps-dev:** bump puppeteer from 24.7.2 to 24.9.0 ([7e742e0](https://github.com/discue/paddle-integration-mongodb/commit/7e742e08f6df1fbd393bca47416f7a8688db5f6f))
* **deps-dev:** bump puppeteer from 24.9.0 to 24.11.1 ([15d504f](https://github.com/discue/paddle-integration-mongodb/commit/15d504f58e375d5ac7bacb8fc5bd33194e19ba00))
* **deps-dev:** bump puppeteer from 24.9.0 to 24.11.1 ([4eff09a](https://github.com/discue/paddle-integration-mongodb/commit/4eff09ac6f658c6cad9a51f68153406847bb442a))
* **deps-dev:** bump typescript from 5.7.2 to 5.7.3 ([0052a22](https://github.com/discue/paddle-integration-mongodb/commit/0052a22baadd4fa2742cdfdb9d13f51ab8562d58))
* **deps-dev:** bump typescript from 5.7.2 to 5.7.3 ([6bf3a75](https://github.com/discue/paddle-integration-mongodb/commit/6bf3a75e5b8cddc6eb29e0e1a81c35ef83853114))
* **deps-dev:** bump typescript from 5.7.3 to 5.8.2 ([0010070](https://github.com/discue/paddle-integration-mongodb/commit/00100704f9aa1b3b0e5c7152015794de3341591d))
* **deps-dev:** bump typescript from 5.7.3 to 5.8.2 ([8359072](https://github.com/discue/paddle-integration-mongodb/commit/8359072abff7cddab1284f73e8d0f639ce82a614))
* **deps-dev:** bump typescript from 5.8.2 to 5.8.3 ([10108e6](https://github.com/discue/paddle-integration-mongodb/commit/10108e61a5495a90c8ed2088add1b8edab5012a9))
* **deps-dev:** bump typescript from 5.8.2 to 5.8.3 ([5a7c434](https://github.com/discue/paddle-integration-mongodb/commit/5a7c43469d3af3a6affa0d771b96ff2afff678d0))
* **deps-dev:** bump typescript from 5.8.3 to 5.9.2 ([8375fe8](https://github.com/discue/paddle-integration-mongodb/commit/8375fe8a29decb0ca8425add4815fa058c4d187c))
* **deps-dev:** bump typescript from 5.8.3 to 5.9.2 ([a54a91c](https://github.com/discue/paddle-integration-mongodb/commit/a54a91cc2723172a6dd573ca48d24def15c82bda))
* **deps-dev:** bump typescript from 5.9.2 to 5.9.3 ([abf295d](https://github.com/discue/paddle-integration-mongodb/commit/abf295d9de6b9ffb25fa97e1bbfea7b25e7c7d3f))
* **deps-dev:** bump typescript from 5.9.2 to 5.9.3 ([2899d5f](https://github.com/discue/paddle-integration-mongodb/commit/2899d5f3998849d0e5e99b5bd3f40b20597a6c18))
* **deps-dev:** bump typescript from 6.0.2 to 7.0.2 ([3136388](https://github.com/discue/paddle-integration-mongodb/commit/3136388e90d6598fbea444e5babcfacb4c209625))
* **deps-dev:** bump typescript from 6.0.2 to 7.0.2 ([d36a60d](https://github.com/discue/paddle-integration-mongodb/commit/d36a60d01e7a866656854931067861e38e132a87))
* **deps:** bump @discue/mongodb-resource-client from 0.13.0 to 0.20.0 ([636facc](https://github.com/discue/paddle-integration-mongodb/commit/636facc08f39f6533502dada37df4884856340a9))
* **deps:** bump @discue/mongodb-resource-client from 0.13.0 to 0.20.0 ([47c817e](https://github.com/discue/paddle-integration-mongodb/commit/47c817eab885763e14733e49258fd0ab375e4f32))
* **deps:** bump @discue/mongodb-resource-client from 0.20.0 to 0.21.1 ([345e0a9](https://github.com/discue/paddle-integration-mongodb/commit/345e0a9a22f54eea91882a2b84b0d3cbc061372c))
* **deps:** bump @discue/mongodb-resource-client from 0.20.0 to 0.21.1 ([bdbb6af](https://github.com/discue/paddle-integration-mongodb/commit/bdbb6af78152fd7be3537c227fcd7b32298b1152))
* **deps:** bump @discue/mongodb-resource-client from 0.21.1 to 0.25.0 ([b28becb](https://github.com/discue/paddle-integration-mongodb/commit/b28becb6af458dcbfb673666df3f28bbfde10b8b))
* **deps:** bump @discue/mongodb-resource-client from 0.21.1 to 0.25.0 ([369445e](https://github.com/discue/paddle-integration-mongodb/commit/369445e6209c4f3b137978889fb973cce5fbae49))
* **deps:** bump @discue/mongodb-resource-client from 0.25.0 to 0.28.0 ([9fbad72](https://github.com/discue/paddle-integration-mongodb/commit/9fbad72c43412e0cf6f060adb628d87d24a0aeb6))
* **deps:** bump @discue/mongodb-resource-client from 0.25.0 to 0.28.0 ([7acb6fd](https://github.com/discue/paddle-integration-mongodb/commit/7acb6fdfa718d3c1b0998582982810c9aede40ad))
* **deps:** bump @discue/mongodb-resource-client from 0.3.0 to 0.7.0 ([0958d8a](https://github.com/discue/paddle-integration-mongodb/commit/0958d8a8b9102bdea73e23903626b7559ed97fed))
* **deps:** bump @discue/mongodb-resource-client from 0.3.0 to 0.7.0 ([99ec590](https://github.com/discue/paddle-integration-mongodb/commit/99ec5904c870f2541a003151a62c75807fee81ff))
* **deps:** bump @discue/mongodb-resource-client from 0.33.0 to 0.39.0 ([7102f29](https://github.com/discue/paddle-integration-mongodb/commit/7102f2939aedd614dcbb5058314e8589e44dd5fe))
* **deps:** bump @discue/mongodb-resource-client from 0.33.0 to 0.39.0 ([d4469d5](https://github.com/discue/paddle-integration-mongodb/commit/d4469d52003a777fba54f9a2aa30262ad150e355))
* **deps:** bump @discue/mongodb-resource-client from 0.39.0 to 0.40.0 ([d852bb6](https://github.com/discue/paddle-integration-mongodb/commit/d852bb61ec5a8e6442dc2a28409f29f671d32d73))
* **deps:** bump @discue/mongodb-resource-client from 0.39.0 to 0.40.0 ([e2fd5ee](https://github.com/discue/paddle-integration-mongodb/commit/e2fd5eec75c1cf5d10bac581d535a271364c6493))
* **deps:** bump @discue/mongodb-resource-client from 0.40.0 to 1.0.0 ([91cc8fd](https://github.com/discue/paddle-integration-mongodb/commit/91cc8fd2acda80f5fb7aae6e3cf6831b2bad762d))
* **deps:** bump @discue/mongodb-resource-client from 0.40.0 to 1.0.0 ([393927c](https://github.com/discue/paddle-integration-mongodb/commit/393927c64b1d5739cab7f4c66791d588a240e022))
* **deps:** bump @discue/mongodb-resource-client from 0.7.0 to 0.8.0 ([f5eb164](https://github.com/discue/paddle-integration-mongodb/commit/f5eb164dfe8104f10d64d173c76b9cea591e90a6))
* **deps:** bump @discue/mongodb-resource-client from 0.7.0 to 0.8.0 ([042af03](https://github.com/discue/paddle-integration-mongodb/commit/042af033ebf0aadaa04d8d6f6ddc13d7d5c24fc3))
* **deps:** bump actions/checkout from 3 to 4 ([a5370a4](https://github.com/discue/paddle-integration-mongodb/commit/a5370a437b5dd0bd147e552345a8764287c5cae1))
* **deps:** bump actions/checkout from 3 to 4 ([0a8d89b](https://github.com/discue/paddle-integration-mongodb/commit/0a8d89bec9e907a7d3ae22088ff305e2f5e167ba))
* **deps:** bump actions/checkout from 4 to 5 ([8e7b5f6](https://github.com/discue/paddle-integration-mongodb/commit/8e7b5f6d5c7cee2b47c2a3090306f9232723a48a))
* **deps:** bump actions/checkout from 4 to 5 ([3a4fa42](https://github.com/discue/paddle-integration-mongodb/commit/3a4fa42c083cded32381269734e2eb1188478726))
* **deps:** bump actions/checkout from 5 to 6 ([8d24e00](https://github.com/discue/paddle-integration-mongodb/commit/8d24e007b4e3b39c26f8b288d3c960dc6dbd4e76))
* **deps:** bump actions/checkout from 5 to 6 ([b80be1b](https://github.com/discue/paddle-integration-mongodb/commit/b80be1b278eb4b8f8c2e15906a3b1da580446681))
* **deps:** bump actions/setup-node from 3 to 4 ([723cd82](https://github.com/discue/paddle-integration-mongodb/commit/723cd82c69f6e6d2ce8b7bb8767193cf71cb648a))
* **deps:** bump actions/setup-node from 3 to 4 ([2b8b742](https://github.com/discue/paddle-integration-mongodb/commit/2b8b7425df08b0ba48db2ce19473690755bc96f1))
* **deps:** bump actions/setup-node from 4 to 5 ([dd592bb](https://github.com/discue/paddle-integration-mongodb/commit/dd592bbe23d0f8128714d2273c8af711c9e7136b))
* **deps:** bump actions/setup-node from 4 to 5 ([3d9a87e](https://github.com/discue/paddle-integration-mongodb/commit/3d9a87eff65876f22812903d971c9863e0b22fdf))
* **deps:** bump actions/setup-node from 5 to 6 ([af3958c](https://github.com/discue/paddle-integration-mongodb/commit/af3958cbc423128981ae1d95a6ccc9d0a8757004))
* **deps:** bump actions/setup-node from 5 to 6 ([45db133](https://github.com/discue/paddle-integration-mongodb/commit/45db13315db7f6eb42a7e4e64154ed0aa5071b4b))
* **deps:** bump actions/stale from 6 to 7 ([857662c](https://github.com/discue/paddle-integration-mongodb/commit/857662ce94fdf3da1efefc61331edf3c25f434d5))
* **deps:** bump actions/stale from 7 to 8 ([aff4d08](https://github.com/discue/paddle-integration-mongodb/commit/aff4d0869c9f57e5c2fdbfbbe14fd6a94402bf66))
* **deps:** bump actions/stale from 7 to 8 ([75ad3fd](https://github.com/discue/paddle-integration-mongodb/commit/75ad3fd8ae4b26c16596fadb9bbda25408a4acfb))
* **deps:** bump actions/stale from 8 to 9 ([5c57117](https://github.com/discue/paddle-integration-mongodb/commit/5c57117e7cc6831171ee418e536d07b79b0fb676))
* **deps:** bump actions/stale from 8 to 9 ([18853fb](https://github.com/discue/paddle-integration-mongodb/commit/18853fbb20a7699ea313c27fa00b318284b3b88d))
* **deps:** bump actions/stale from 9 to 10 ([12eae03](https://github.com/discue/paddle-integration-mongodb/commit/12eae038471e79730e5951bf950a79d8ee6b5383))
* **deps:** bump actions/stale from 9 to 10 ([4649817](https://github.com/discue/paddle-integration-mongodb/commit/4649817f966a79675d7642fc07434634c9973bf2))
* **deps:** bump firebase-admin from 11.4.1 to 11.5.0 ([6b4461e](https://github.com/discue/paddle-integration-mongodb/commit/6b4461edb874db6bb33bd5639401c3c27e8fd7c0))
* **deps:** bump firebase-admin from 11.4.1 to 11.5.0 ([8a4538a](https://github.com/discue/paddle-integration-mongodb/commit/8a4538ae1738f19c730fd742dfd7671d61e963f1))
* **deps:** bump got from 13.0.0 to 14.2.0 ([b315b3e](https://github.com/discue/paddle-integration-mongodb/commit/b315b3e1e61f88e7bff6205b2f48022bb60746ff))
* **deps:** bump got from 13.0.0 to 14.2.0 ([4b4ea70](https://github.com/discue/paddle-integration-mongodb/commit/4b4ea708a191ff9dda8f2dae6199b9abaf588654))
* **deps:** bump got from 14.2.1 to 14.3.0 ([1789f35](https://github.com/discue/paddle-integration-mongodb/commit/1789f35627c5134c2a41cfb2ccd7b85c8d9d2bf7))
* **deps:** bump got from 14.2.1 to 14.3.0 ([69ae62f](https://github.com/discue/paddle-integration-mongodb/commit/69ae62f2de7d3fbfe86215633714ef337aa4bc77))
* **deps:** bump got from 14.3.0 to 14.4.1 ([9c39b3f](https://github.com/discue/paddle-integration-mongodb/commit/9c39b3f282d9dd794686a7702313a32a1c5241b9))
* **deps:** bump got from 14.3.0 to 14.4.1 ([c2970e1](https://github.com/discue/paddle-integration-mongodb/commit/c2970e1cba0e43c5d1f10e4cd809538ecde6aca0))
* **deps:** bump got from 14.4.1 to 14.4.2 ([d81669c](https://github.com/discue/paddle-integration-mongodb/commit/d81669cd217b2902edc6b223f20fdd5c60fe102c))
* **deps:** bump got from 14.4.1 to 14.4.2 ([4b3a447](https://github.com/discue/paddle-integration-mongodb/commit/4b3a44700b3fc79d9687c6ea16345162615cd13c))
* **deps:** bump got from 14.4.2 to 14.4.5 ([d12c074](https://github.com/discue/paddle-integration-mongodb/commit/d12c074a6a154956c38f27e30aecebebe779f61c))
* **deps:** bump got from 14.4.2 to 14.4.5 ([656b169](https://github.com/discue/paddle-integration-mongodb/commit/656b169fcfd81549501b675fdf3c070cc01f1a8a))
* **deps:** bump got from 14.4.2 to 14.4.5 ([67c6063](https://github.com/discue/paddle-integration-mongodb/commit/67c6063906c5e7f43e0f6c024b2b9aa357277de0))
* **deps:** bump got from 14.4.5 to 14.4.7 ([9455877](https://github.com/discue/paddle-integration-mongodb/commit/9455877c03afda365134e31138725af95d6debe9))
* **deps:** bump got from 14.4.5 to 14.4.7 ([e9c60d0](https://github.com/discue/paddle-integration-mongodb/commit/e9c60d0d5cfe09bd6dd50b8cfbc20d6a9cc62785))
* **deps:** bump got from 14.4.7 to 14.4.8 ([e3fdb78](https://github.com/discue/paddle-integration-mongodb/commit/e3fdb7807774dd1077db255554907a9e471712b6))
* **deps:** bump got from 14.4.7 to 14.4.8 ([5d18d86](https://github.com/discue/paddle-integration-mongodb/commit/5d18d864292da17d82a97ee8358eb1dcf38802ce))
* **deps:** bump got from 14.4.8 to 14.4.9 ([e767192](https://github.com/discue/paddle-integration-mongodb/commit/e76719220136f4e09d9e457800c5403d633acbf5))
* **deps:** bump got from 14.4.8 to 14.4.9 ([d2ce24f](https://github.com/discue/paddle-integration-mongodb/commit/d2ce24f73460fa96bfba79278bb6895cdb85a100))
* **deps:** bump got from 14.4.9 to 14.6.1 ([1ee96c0](https://github.com/discue/paddle-integration-mongodb/commit/1ee96c05df52bc60528772eda23b29b33d1059a3))
* **deps:** bump got from 14.4.9 to 14.6.1 ([842203e](https://github.com/discue/paddle-integration-mongodb/commit/842203e783d84796379bec50d9969e24b537ce96))
* **deps:** bump got from 14.6.1 to 14.6.6 ([adbdd62](https://github.com/discue/paddle-integration-mongodb/commit/adbdd621f97d4f1d84c4b4b3a66efb2c3ba6aa2c))
* **deps:** bump got from 14.6.1 to 14.6.6 ([c785abb](https://github.com/discue/paddle-integration-mongodb/commit/c785abb5108a0ea195955c02b40012d0b8caf9fd))
* **deps:** bump got from 14.6.6 to 15.1.0 ([54a07fa](https://github.com/discue/paddle-integration-mongodb/commit/54a07fade2428adfd266a1fdac4bb586161c5bdc))
* **deps:** bump got from 14.6.6 to 15.1.0 ([d5349be](https://github.com/discue/paddle-integration-mongodb/commit/d5349bed1f91296805f3de0f84ece6ff0026649e))
* **deps:** bump got from 15.1.0 to 16.0.0 ([3b4a64b](https://github.com/discue/paddle-integration-mongodb/commit/3b4a64b3f168315a207f6e95d052301b28be9465))
* **deps:** bump got from 15.1.0 to 16.0.0 ([76412db](https://github.com/discue/paddle-integration-mongodb/commit/76412db7e1d76bab2275ec8575b715c4b0bdc9ca))
* **deps:** bump html-entities from 2.3.5 to 2.4.0 ([e5a0bd0](https://github.com/discue/paddle-integration-mongodb/commit/e5a0bd0de42da258f565277d0366fa34750a5945))
* **deps:** bump html-entities from 2.3.5 to 2.4.0 ([7eca6a4](https://github.com/discue/paddle-integration-mongodb/commit/7eca6a442a89cda40f503d06889eb70e2d92348f))
* **deps:** bump html-entities from 2.5.2 to 2.6.0 ([f4af169](https://github.com/discue/paddle-integration-mongodb/commit/f4af16984c6fa1a490a4f77263309eab77fa4d05))
* **deps:** bump html-entities from 2.5.2 to 2.6.0 ([04148f7](https://github.com/discue/paddle-integration-mongodb/commit/04148f7e35f59b3f56149ab226a263a94dd0a454))
* **deps:** bump mongodb from 5.7.0 to 6.0.0 ([20cd6ae](https://github.com/discue/paddle-integration-mongodb/commit/20cd6aeda86f6889b99a42510a3980e471915a33))
* **deps:** bump mongodb from 5.7.0 to 6.0.0 ([1151819](https://github.com/discue/paddle-integration-mongodb/commit/1151819d123c0f717a47ad201f3c914fe279fe29))
* **deps:** bump mongodb from 6.1.0 to 6.2.0 ([8097670](https://github.com/discue/paddle-integration-mongodb/commit/80976704272126175e6541b1761bfa9a3b58075c))
* **deps:** bump mongodb from 6.1.0 to 6.2.0 ([af278af](https://github.com/discue/paddle-integration-mongodb/commit/af278af0e29871e82213fd4196fa8b01e0e3fd93))
* **deps:** bump mongodb from 6.11.0 to 6.13.0 ([9ed4d7c](https://github.com/discue/paddle-integration-mongodb/commit/9ed4d7c9966a1d37ac55b8270ce8750ad222a6af))
* **deps:** bump mongodb from 6.11.0 to 6.13.0 ([8511e3a](https://github.com/discue/paddle-integration-mongodb/commit/8511e3ae477530b19d8113c50b6f6f399dd9b8a8))
* **deps:** bump mongodb from 6.13.0 to 6.14.0 ([a59d37d](https://github.com/discue/paddle-integration-mongodb/commit/a59d37d9c877cd734fd50703e18315e75a8273b1))
* **deps:** bump mongodb from 6.13.0 to 6.14.0 ([6c0eda2](https://github.com/discue/paddle-integration-mongodb/commit/6c0eda2ad7ac658f2f07bc8e002e4e8aa8581fea))
* **deps:** bump mongodb from 6.14.0 to 6.15.0 ([064618b](https://github.com/discue/paddle-integration-mongodb/commit/064618baec2ee0b802786800d7796165ffa4651f))
* **deps:** bump mongodb from 6.14.0 to 6.15.0 ([39ed534](https://github.com/discue/paddle-integration-mongodb/commit/39ed534a38b95e09e9300fe3d341a2968c8b0b82))
* **deps:** bump mongodb from 6.15.0 to 6.16.0 ([423002d](https://github.com/discue/paddle-integration-mongodb/commit/423002d6dfae1aafe1a9441c9ff83145d924279f))
* **deps:** bump mongodb from 6.15.0 to 6.16.0 ([821f951](https://github.com/discue/paddle-integration-mongodb/commit/821f95134c1faf7e6b5c1a38a67ce594ff5bf0b3))
* **deps:** bump mongodb from 6.16.0 to 6.17.0 ([0682765](https://github.com/discue/paddle-integration-mongodb/commit/0682765d1982e90a1912203c7f3c130f99c22833))
* **deps:** bump mongodb from 6.16.0 to 6.17.0 ([b4b19b1](https://github.com/discue/paddle-integration-mongodb/commit/b4b19b1d9f6c46c886873de3583b1bf053dbc09f))
* **deps:** bump mongodb from 6.17.0 to 6.18.0 ([a998110](https://github.com/discue/paddle-integration-mongodb/commit/a9981102856b8763beb42421c40936abbe4fad49))
* **deps:** bump mongodb from 6.17.0 to 6.18.0 ([e831091](https://github.com/discue/paddle-integration-mongodb/commit/e8310910786dfba24d6b65131356b37deacae438))
* **deps:** bump mongodb from 6.18.0 to 6.19.0 ([74aee52](https://github.com/discue/paddle-integration-mongodb/commit/74aee52e657fef9714adcb0b0d156a9edbfbe360))
* **deps:** bump mongodb from 6.18.0 to 6.19.0 ([5d097b6](https://github.com/discue/paddle-integration-mongodb/commit/5d097b61dbea89aaab7036094001a4a658610a83))
* **deps:** bump mongodb from 6.19.0 to 6.20.0 ([5069b6b](https://github.com/discue/paddle-integration-mongodb/commit/5069b6b6d591fc8f7e1680ed6e408909476867df))
* **deps:** bump mongodb from 6.19.0 to 6.20.0 ([d4a8a93](https://github.com/discue/paddle-integration-mongodb/commit/d4a8a93e0c2085ba83eef7e62bebb8653cbd194a))
* **deps:** bump mongodb from 6.2.0 to 6.3.0 ([8a391fa](https://github.com/discue/paddle-integration-mongodb/commit/8a391fa1c1e01d735939653bae7fc1d46c091b8a))
* **deps:** bump mongodb from 6.2.0 to 6.3.0 ([1b026cd](https://github.com/discue/paddle-integration-mongodb/commit/1b026cdfa1d06b5575385ca75077149e307b45bf))
* **deps:** bump mongodb from 6.20.0 to 7.0.0 ([b878777](https://github.com/discue/paddle-integration-mongodb/commit/b878777d07be7d8c9372baf212802f12e66a9d94))
* **deps:** bump mongodb from 6.20.0 to 7.0.0 ([0ab0368](https://github.com/discue/paddle-integration-mongodb/commit/0ab03686bebf8ba048115f4d44a31ea9beec7a44))
* **deps:** bump mongodb from 6.5.0 to 6.7.0 ([cc7314f](https://github.com/discue/paddle-integration-mongodb/commit/cc7314f134915e0701b7b609bbb4485de1310f3b))
* **deps:** bump mongodb from 6.5.0 to 6.7.0 ([c98ae35](https://github.com/discue/paddle-integration-mongodb/commit/c98ae35fa432333be4f7a0ff3af80e97c5bf3294))
* **deps:** bump mongodb from 6.7.0 to 6.8.0 ([e856a27](https://github.com/discue/paddle-integration-mongodb/commit/e856a274b28fbc4013dd30328be45ea6c685b00c))
* **deps:** bump mongodb from 6.7.0 to 6.8.0 ([f6a7391](https://github.com/discue/paddle-integration-mongodb/commit/f6a73910b9e81c8ea9e8efdd4888e0afec9f9530))
* **deps:** bump mongodb from 7.5.0 to 7.7.0 ([0413350](https://github.com/discue/paddle-integration-mongodb/commit/0413350f980f266549526ea3021a196df3bfaaac))
* **deps:** bump mongodb from 7.5.0 to 7.7.0 ([f1eb33f](https://github.com/discue/paddle-integration-mongodb/commit/f1eb33feeaefe42ab8626400e373fa598eaaa80b))
* **deps:** declare tracing as runtime dependency ([62c1463](https://github.com/discue/paddle-integration-mongodb/commit/62c1463ad6fedcf725213794ace6fcc1939a923a))
* **deps:** install mongodb dep ([f655a93](https://github.com/discue/paddle-integration-mongodb/commit/f655a931447f49d4ae56bc65c75b28c93fc94fb4))
* **deps:** install node-amy dev dependency again ([fdc9645](https://github.com/discue/paddle-integration-mongodb/commit/fdc9645d5c5085055cbdc20d23e7240985bcdb8f))
* **deps:** install node-amy dev dependency again ([5854cfd](https://github.com/discue/paddle-integration-mongodb/commit/5854cfd45c5193ff739fdde2c02d41b36f03b88c))
* **deps:** remove firebase, add mongodb dependencies ([3b72445](https://github.com/discue/paddle-integration-mongodb/commit/3b72445fa9413acfd13bcc44c46316566d0510a1))
* **deps:** remove localtunnel dependency ([74b1afc](https://github.com/discue/paddle-integration-mongodb/commit/74b1afc72378aede0648c59131dcfa6f5dd684f8))
* **deps:** revert to chai v4 ([64b8c20](https://github.com/discue/paddle-integration-mongodb/commit/64b8c20171b4a0d9687d80102124439063bb49e6))
* **deps:** update dependencies ([c9cfc94](https://github.com/discue/paddle-integration-mongodb/commit/c9cfc9472f54b75c308f25295d9a8010dd088d14))
* **deps:** update dependencies ([e2270d5](https://github.com/discue/paddle-integration-mongodb/commit/e2270d5d5eb2f45afbad0ed9de77d1cfbe6c5ceb))
* **deps:** update dependencies ([c42651a](https://github.com/discue/paddle-integration-mongodb/commit/c42651aa798e483bf440b98973c993308e00c834))
* **deps:** update dependencies ([150c992](https://github.com/discue/paddle-integration-mongodb/commit/150c992a1d06b7ba8688227e4fc4497df16032a3))
* **deps:** update dependencies ([fba0e15](https://github.com/discue/paddle-integration-mongodb/commit/fba0e15d0529f27fefcfeb60e7b33486a0e55413))
* **deps:** update dependencies ([b074f03](https://github.com/discue/paddle-integration-mongodb/commit/b074f036c0aed61a0ebf76ca7dfe90aa2d228529))
* **deps:** update dependencies ([e853f1b](https://github.com/discue/paddle-integration-mongodb/commit/e853f1b0e8a48ca6ef6a3e5af133879a6a8dff2f))
* **deps:** update dependencies ([6c2bd92](https://github.com/discue/paddle-integration-mongodb/commit/6c2bd924eeb8695d8851943cccbe8e1c9170a25f))
* **deps:** update dependencies ([029c9cc](https://github.com/discue/paddle-integration-mongodb/commit/029c9cc1c81c98f4f842c88340982acb207dd24a))
* **deps:** update dependencies ([f3edfd7](https://github.com/discue/paddle-integration-mongodb/commit/f3edfd78869808fca467fab9c9a562052db13cf0))
* **deps:** update mongodb resource client ([35f2ea4](https://github.com/discue/paddle-integration-mongodb/commit/35f2ea40cda0fd484b9f228c9719f3072edf93b6))
* **deps:** update resource client ([7684454](https://github.com/discue/paddle-integration-mongodb/commit/7684454807bb717a08fe6fad800698c1f5e43112))
* do not source hidden env file ([7e51518](https://github.com/discue/paddle-integration-mongodb/commit/7e51518cf6a335b9385f2ed362c91ada5c0f5162))
* **firebase:** prevent port collisions ([452a180](https://github.com/discue/paddle-integration-mongodb/commit/452a180579dc3a039351b498b1c89ae81cc88570))
* fix type on description ([4372e05](https://github.com/discue/paddle-integration-mongodb/commit/4372e0518d06139a5ce9d241ac0f9f93ad5cc004))
* fixup npm scripts ([716da0b](https://github.com/discue/paddle-integration-mongodb/commit/716da0bee8e2a344093344c7fc774875e1468aa1))
* **gitignore:** ignore test-results folder ([637faad](https://github.com/discue/paddle-integration-mongodb/commit/637faad5aa548cfbfb38e11c8378acc9b385f6e0))
* **hooks:** also store effective cancel date ([7e337dc](https://github.com/discue/paddle-integration-mongodb/commit/7e337dca6b630c66248291cbff12f552f4de0418))
* **lint:** dont require unix style line ending ([bad298f](https://github.com/discue/paddle-integration-mongodb/commit/bad298f15bb22d75dd49c5e43bb09cacc0c79885))
* **logger:** update name ([085fc1c](https://github.com/discue/paddle-integration-mongodb/commit/085fc1c49cfebb9af21a6348c32f3a2d4c681a1d))
* make sure telemetry can be disabled with noop module ([a73b705](https://github.com/discue/paddle-integration-mongodb/commit/a73b7055f23e716091a7bcadcd1131291a5b1e70))
* **release:** 0.16.0 ([cc92090](https://github.com/discue/paddle-integration-mongodb/commit/cc92090bfbd66227d9bd58ecff8f124c38def87f))
* **release:** 0.17.0 ([0422459](https://github.com/discue/paddle-integration-mongodb/commit/042245989553a771650cfc073b72d4877b45b95a))
* **release:** 0.18.0 ([fd4cffb](https://github.com/discue/paddle-integration-mongodb/commit/fd4cffb893d6a2076d3d64df2f5f14fa2744066d))
* **release:** 0.19.0 ([b5fe118](https://github.com/discue/paddle-integration-mongodb/commit/b5fe118867fce09ae7c07fc83bd3e9ec81b99053))
* **release:** 0.20.0 ([1ded858](https://github.com/discue/paddle-integration-mongodb/commit/1ded858846c84c5c588ef30e0d4c2483a4e755f7))
* **release:** 0.21.0 ([456df1b](https://github.com/discue/paddle-integration-mongodb/commit/456df1b21cf310d679dc985c727ddeae6403a6f4))
* **release:** 0.22.0 ([c243686](https://github.com/discue/paddle-integration-mongodb/commit/c2436860fff97eec04b41015a39aca795161b229))
* **release:** 0.23.0 ([56dd77f](https://github.com/discue/paddle-integration-mongodb/commit/56dd77f8d190c703e1643747bb4b2ab9b4df1628))
* **release:** 0.23.1 ([b94248f](https://github.com/discue/paddle-integration-mongodb/commit/b94248ffd0a70723d666fa60cca2b5422811f7bb))
* **release:** 0.24.0 ([430e69f](https://github.com/discue/paddle-integration-mongodb/commit/430e69f473fef41c0b474546c5dedfb653e440ef))
* **release:** 0.25.0 ([133e338](https://github.com/discue/paddle-integration-mongodb/commit/133e338f3f30df47ab8d51e749c248b5bba76f23))
* **release:** 0.26.0 ([7f09a89](https://github.com/discue/paddle-integration-mongodb/commit/7f09a894c6dea8c6f9a66a84e5e652ec016de888))
* **release:** 1.0.0 ([73baf81](https://github.com/discue/paddle-integration-mongodb/commit/73baf81b362716b783556fddc51dd4d3e8e86f7b))
* remove firebase artifacts ([75424eb](https://github.com/discue/paddle-integration-mongodb/commit/75424ebef906731daea933a5bac66b113185a819))
* remove test files for upcoming billing feature ([220d37c](https://github.com/discue/paddle-integration-mongodb/commit/220d37c6642056c03fc8a9736ffe5f0d48711bf9))
* remove unused firebase modules ([d822895](https://github.com/discue/paddle-integration-mongodb/commit/d822895f430533fb923b4f72162d616000b53146))
* remove unused flatten component ([88e7af5](https://github.com/discue/paddle-integration-mongodb/commit/88e7af5253175265013d0cd59d176e011354bcea))
* reset version ([771ce96](https://github.com/discue/paddle-integration-mongodb/commit/771ce96c3e5b58708637aa78f938b2e75b03b86f))
* standardize release-please and stale workflows ([2a96cf1](https://github.com/discue/paddle-integration-mongodb/commit/2a96cf10c78d6c5a7ceb5d19a7ea1f93f82a10a2))
* standardize release-please and stale workflows ([0e753cb](https://github.com/discue/paddle-integration-mongodb/commit/0e753cb8b0ee024d2ed311d862ad60083e6b9724))
* **subscription-hooks:** add resource name property ([bf33010](https://github.com/discue/paddle-integration-mongodb/commit/bf330104b687cb5b7f74bb472e5d8cfeb00d0067))
* **subscription-hydration:** do not require checkout id ([81c30b1](https://github.com/discue/paddle-integration-mongodb/commit/81c30b190f515332d942071766d6302796249885))
* **subscription-hydration:** hide private instance properties ([36130ff](https://github.com/discue/paddle-integration-mongodb/commit/36130ff2a5408db9474468d2801028ed11583b47))
* **subscription-hydration:** store sale gross and payment amount as string ([40e55f8](https://github.com/discue/paddle-integration-mongodb/commit/40e55f8313878bcea333d2a2d0d1347b91a0034a))
* **subscription-info:** update constructor jsdoc ([726cd7e](https://github.com/discue/paddle-integration-mongodb/commit/726cd7e57228311f7ae6eec728e413ab7422c53b))
* update date field selector ([9957077](https://github.com/discue/paddle-integration-mongodb/commit/9957077b4275ff8fc486437dcb57d6101205374f))
* update module  name in logger ([19d1b1b](https://github.com/discue/paddle-integration-mongodb/commit/19d1b1ba6a5fbb72fa0c2b5b199f1a21654da98d))
* update name and reset version ([a5d364c](https://github.com/discue/paddle-integration-mongodb/commit/a5d364c520af90a41f128e89d0c94bb4ed2aaf5e))
* update package name ([678be12](https://github.com/discue/paddle-integration-mongodb/commit/678be12817bac0cd6f03041db5a4e4d91b93d6eb))
* update readme ([135deb7](https://github.com/discue/paddle-integration-mongodb/commit/135deb7a6815b694a7b93943120341cbcdcf2cc4))
* update readme ([c3b6a2b](https://github.com/discue/paddle-integration-mongodb/commit/c3b6a2b0f11fac812ef2f4ff3f8a53b091d64921))
* update scripts to create types and add major release script ([83e62c3](https://github.com/discue/paddle-integration-mongodb/commit/83e62c3926f6cbe161a41a335462248b0d19e5ee))
* update subscription plan ids ([a3a547e](https://github.com/discue/paddle-integration-mongodb/commit/a3a547e0c87e6c3539385f8468f415d1e55ce99b))
* use global setup and teardown again ([c822f30](https://github.com/discue/paddle-integration-mongodb/commit/c822f3001581e5c531f267846642b63e127e5d8a))
* use new eslint config and version ([e9ad17a](https://github.com/discue/paddle-integration-mongodb/commit/e9ad17aae4fc0f211b969ff65893e828c861f765))

## [1.0.0](https://github.com/discue/paddle-integration-mongodb/compare/v0.26.0...v1.0.0) (2024-12-08)


### Refactorings

* migrate to esm ([563adf3](https://github.com/discue/paddle-integration-mongodb/commit/563adf376a6ff743a832dbee441708e1b489415a))
* migrate to esm ([f60ea63](https://github.com/discue/paddle-integration-mongodb/commit/f60ea63dd1167521fc490b798282f157203d7aed))


### Chores

* **dependabot:** do not ignore chai anymore ([ef5b890](https://github.com/discue/paddle-integration-mongodb/commit/ef5b890338e6484d7772000008fb30227c759eae))
* **dependabot:** do not ignore chai anymore ([3b0b289](https://github.com/discue/paddle-integration-mongodb/commit/3b0b28949c9498fa5db26f64789db0ac7555ce23))
* **dependabot:** ignore all future chai releases ([b9658c7](https://github.com/discue/paddle-integration-mongodb/commit/b9658c78c14b5e20b7f4c83cb22f9e7fb9bc5b92))
* **deps-dev:** bump @discue/open-telemetry-tracing ([648220f](https://github.com/discue/paddle-integration-mongodb/commit/648220f6b7fad47fc9508c06d3635bd901eca555))
* **deps-dev:** bump @discue/open-telemetry-tracing from 1.0.0 to 1.2.0 ([446acb0](https://github.com/discue/paddle-integration-mongodb/commit/446acb0e2970f0a5eb383df39228d728b208b4ee))
* **deps-dev:** bump @discue/open-telemetry-tracing from 1.2.0 to 1.3.0 ([f9e7eb1](https://github.com/discue/paddle-integration-mongodb/commit/f9e7eb1faa93793fc56c3d60dc7465d136484eae))
* **deps-dev:** bump @discue/open-telemetry-tracing from 1.2.0 to 1.3.0 ([efd1e57](https://github.com/discue/paddle-integration-mongodb/commit/efd1e57b067ae6162f9abd899a4de7878284d83a))
* **deps-dev:** bump @playwright/test from 1.37.1 to 1.40.1 ([aca4c97](https://github.com/discue/paddle-integration-mongodb/commit/aca4c9773e6d7898c31f38518f4568ea3adcd126))
* **deps-dev:** bump @playwright/test from 1.42.1 to 1.43.1 ([d3bcc2d](https://github.com/discue/paddle-integration-mongodb/commit/d3bcc2da20eb36498d45cd9ef01040b9329a6aa8))
* **deps-dev:** bump @playwright/test from 1.43.1 to 1.44.1 ([325b505](https://github.com/discue/paddle-integration-mongodb/commit/325b505c32ca06e6230884e8ba1257e7caaf3bd3))
* **deps-dev:** bump @playwright/test from 1.44.1 to 1.46.1 ([692a54a](https://github.com/discue/paddle-integration-mongodb/commit/692a54a8329b7de83ea3ec40f72735f943bddd86))
* **deps-dev:** bump @playwright/test from 1.46.1 to 1.48.2 ([82bf734](https://github.com/discue/paddle-integration-mongodb/commit/82bf734ed5492a2efb2847248312aac498263bbb))
* **deps-dev:** bump @playwright/test from 1.46.1 to 1.48.2 ([5db8dd3](https://github.com/discue/paddle-integration-mongodb/commit/5db8dd30ad788307ff2a98ccf883c4049ca51204))
* **deps-dev:** bump chai from 4.3.10 to 5.1.0 ([286b21d](https://github.com/discue/paddle-integration-mongodb/commit/286b21dd0aafa7e0e29b2bd1e8ff2b68db17e1c2))
* **deps-dev:** bump chai from 4.3.8 to 4.3.10 ([78cae80](https://github.com/discue/paddle-integration-mongodb/commit/78cae80ada038fa4d0632d7fb79019fe2d35bd54))
* **deps-dev:** bump eslint from 8.48.0 to 8.50.0 ([0518e52](https://github.com/discue/paddle-integration-mongodb/commit/0518e527841270b65195eae7e88f8180834a28d6))
* **deps-dev:** bump eslint from 8.50.0 to 8.54.0 ([06bdf9b](https://github.com/discue/paddle-integration-mongodb/commit/06bdf9bf481bfc77b69656d685adaae4a235a7a7))
* **deps-dev:** bump eslint from 8.54.0 to 8.56.0 ([e6d428a](https://github.com/discue/paddle-integration-mongodb/commit/e6d428a97e390fe881724f130be97037de6a3c55))
* **deps-dev:** bump eslint from 9.0.0 to 9.1.1 ([7b86fe9](https://github.com/discue/paddle-integration-mongodb/commit/7b86fe9caf1873b69a5b33353afe396cca75ac56))
* **deps-dev:** bump eslint from 9.1.1 to 9.6.0 ([91cf0de](https://github.com/discue/paddle-integration-mongodb/commit/91cf0de74a2296bf932c4ef0ac160cde5a8305b7))
* **deps-dev:** bump eslint from 9.11.1 to 9.16.0 ([5b2b772](https://github.com/discue/paddle-integration-mongodb/commit/5b2b7729d8c4d90ec6197234d2a085a8468b9ff2))
* **deps-dev:** bump eslint from 9.11.1 to 9.16.0 ([453e844](https://github.com/discue/paddle-integration-mongodb/commit/453e844d104302d5503db7f23287de9c32b7007b))
* **deps-dev:** bump eslint from 9.6.0 to 9.8.0 ([787c015](https://github.com/discue/paddle-integration-mongodb/commit/787c015d9450f74f67d041386124a43373ccf166))
* **deps-dev:** bump eslint from 9.8.0 to 9.11.1 ([6f079ee](https://github.com/discue/paddle-integration-mongodb/commit/6f079ee2a009322098aea72a1da5013775aa0474))
* **deps-dev:** bump express from 4.18.2 to 4.18.3 ([c60bc78](https://github.com/discue/paddle-integration-mongodb/commit/c60bc78754e32d61ffe67e770ff84ad4e8136fd3))
* **deps-dev:** bump express from 4.18.3 to 4.19.2 ([8a74314](https://github.com/discue/paddle-integration-mongodb/commit/8a743143002df61df53bf75a09a46fd76351cf41))
* **deps-dev:** bump express from 4.19.2 to 4.21.0 ([8842a3e](https://github.com/discue/paddle-integration-mongodb/commit/8842a3e471a214617f962e106faa394900804a9b))
* **deps-dev:** bump express from 4.21.0 to 4.21.1 ([6d17379](https://github.com/discue/paddle-integration-mongodb/commit/6d1737961fe8d14ac406cbe903cc20a3d3c9a224))
* **deps-dev:** bump mocha from 10.3.0 to 10.4.0 ([3ad8fdb](https://github.com/discue/paddle-integration-mongodb/commit/3ad8fdbb161ef9834565a1d7e661d25c60a3f22d))
* **deps-dev:** bump mocha from 10.4.0 to 10.5.2 ([ed183a4](https://github.com/discue/paddle-integration-mongodb/commit/ed183a4f4c28d3880fc82552e54ab754a403f147))
* **deps-dev:** bump mocha from 10.5.2 to 10.7.0 ([1f1bfed](https://github.com/discue/paddle-integration-mongodb/commit/1f1bfed81de459581119ebbe6c7d503caec574bf))
* **deps-dev:** bump mocha from 10.7.0 to 10.8.2 ([056531a](https://github.com/discue/paddle-integration-mongodb/commit/056531af441c8e1dfd04c090f3768f28a30f9b80))
* **deps-dev:** bump mocha from 10.7.0 to 10.8.2 ([08d2aaa](https://github.com/discue/paddle-integration-mongodb/commit/08d2aaa632d92b25d31edffc80cb728d53ff0e26))
* **deps-dev:** bump mongodb-memory-server from 10.0.0 to 10.0.1 ([d544f44](https://github.com/discue/paddle-integration-mongodb/commit/d544f440075d39fba92fc95de5add840a2c39b31))
* **deps-dev:** bump mongodb-memory-server from 10.0.1 to 10.1.2 ([401a1ef](https://github.com/discue/paddle-integration-mongodb/commit/401a1efa3e0c7a8027ba6867de695c6ab691e78a))
* **deps-dev:** bump mongodb-memory-server from 10.0.1 to 10.1.2 ([fc7eff0](https://github.com/discue/paddle-integration-mongodb/commit/fc7eff02329c64973031038cac258188c0bcef82))
* **deps-dev:** bump mongodb-memory-server from 8.15.1 to 9.0.1 ([cf3a275](https://github.com/discue/paddle-integration-mongodb/commit/cf3a275eb43083240d8a14d0211604783109f872))
* **deps-dev:** bump mongodb-memory-server from 9.0.1 to 9.1.1 ([1017a99](https://github.com/discue/paddle-integration-mongodb/commit/1017a991bbb491a76b730f105d7494eea8633585))
* **deps-dev:** bump mongodb-memory-server from 9.1.1 to 9.1.3 ([739968c](https://github.com/discue/paddle-integration-mongodb/commit/739968cb691aedd7617602a9cf5efe66df7a0d9b))
* **deps-dev:** bump mongodb-memory-server from 9.1.3 to 9.1.6 ([82d12a9](https://github.com/discue/paddle-integration-mongodb/commit/82d12a91db877ed90368fabc041fcf5d82a816d3))
* **deps-dev:** bump mongodb-memory-server from 9.1.7 to 9.1.8 ([57bc5db](https://github.com/discue/paddle-integration-mongodb/commit/57bc5db131b563f779f080aa206a986c8f687b20))
* **deps-dev:** bump mongodb-memory-server from 9.1.8 to 9.2.0 ([83f59e6](https://github.com/discue/paddle-integration-mongodb/commit/83f59e64fd2d8b63a47d801fbd3275b692287c5c))
* **deps-dev:** bump mongodb-memory-server from 9.2.0 to 10.0.0 ([fb89e64](https://github.com/discue/paddle-integration-mongodb/commit/fb89e6428b9611d55113f476cb420e5adda38bd5))
* **deps-dev:** bump nodemon from 3.0.1 to 3.0.3 ([e6ad265](https://github.com/discue/paddle-integration-mongodb/commit/e6ad2653e13fb8c3be2c1af90b6d548a6aa4f8b2))
* **deps-dev:** bump nodemon from 3.1.0 to 3.1.2 ([8f30c61](https://github.com/discue/paddle-integration-mongodb/commit/8f30c6112690b11ce5b816ce4cdfd837234259dd))
* **deps-dev:** bump nodemon from 3.1.2 to 3.1.7 ([85a315b](https://github.com/discue/paddle-integration-mongodb/commit/85a315b2d1c4cdd56a053a9e8ca1437adcfdc5c7))
* **deps-dev:** bump puppeteer from 20.9.0 to 21.3.6 ([43b4c38](https://github.com/discue/paddle-integration-mongodb/commit/43b4c387c8b94336ae720c14c83011866ceb5f00))
* **deps-dev:** bump puppeteer from 21.3.6 to 21.5.2 ([554ccb4](https://github.com/discue/paddle-integration-mongodb/commit/554ccb4174759657e84d703021df0f64122702c0))
* **deps-dev:** bump puppeteer from 21.5.2 to 22.0.0 ([1934fff](https://github.com/discue/paddle-integration-mongodb/commit/1934fffe39c8a1131ef401f536bd8c3de2e287f4))
* **deps-dev:** bump puppeteer from 22.0.0 to 22.3.0 ([9aae365](https://github.com/discue/paddle-integration-mongodb/commit/9aae365fc0e092173c26fa3b2990f9ddd468ef7b))
* **deps-dev:** bump puppeteer from 22.10.0 to 22.12.1 ([27238fe](https://github.com/discue/paddle-integration-mongodb/commit/27238fe9bce319d610296de21ec0d3a575ac779a))
* **deps-dev:** bump puppeteer from 22.12.1 to 23.2.1 ([556a5bd](https://github.com/discue/paddle-integration-mongodb/commit/556a5bd41aa17ad650f8551294e42e972ff48e75))
* **deps-dev:** bump puppeteer from 22.5.0 to 22.6.1 ([50024b4](https://github.com/discue/paddle-integration-mongodb/commit/50024b4e811a39c4831c50ae9bf7c8337daaa44d))
* **deps-dev:** bump puppeteer from 22.6.1 to 22.7.1 ([56f94b4](https://github.com/discue/paddle-integration-mongodb/commit/56f94b417633e11e7de2bec65ac3b077aa8addf8))
* **deps-dev:** bump puppeteer from 22.7.1 to 22.10.0 ([2c7907c](https://github.com/discue/paddle-integration-mongodb/commit/2c7907c1014874514f8a5a3b512121a8f56ad76d))
* **deps-dev:** bump puppeteer from 23.2.1 to 23.4.1 ([150a91b](https://github.com/discue/paddle-integration-mongodb/commit/150a91bcb2eaab57024047c24a1a1dc8f9598060))
* **deps-dev:** bump puppeteer from 23.4.1 to 23.6.1 ([0102fd2](https://github.com/discue/paddle-integration-mongodb/commit/0102fd24bf1dd18e219fedc4aeb6fdab5437692b))
* **deps-dev:** bump puppeteer from 23.4.1 to 23.6.1 ([e329705](https://github.com/discue/paddle-integration-mongodb/commit/e3297052eeb9acf33ea7908554aefe4af0577ce2))
* **deps-dev:** bump puppeteer from 23.6.1 to 23.9.0 ([740cedb](https://github.com/discue/paddle-integration-mongodb/commit/740cedb51daeb3d8337d237458bd7feca89c81a4))
* **deps-dev:** bump puppeteer from 23.6.1 to 23.9.0 ([e70f4a5](https://github.com/discue/paddle-integration-mongodb/commit/e70f4a587378afe60ed423d620342492747e52d9))
* **deps:** bump @discue/mongodb-resource-client from 0.13.0 to 0.20.0 ([47c817e](https://github.com/discue/paddle-integration-mongodb/commit/47c817eab885763e14733e49258fd0ab375e4f32))
* **deps:** bump @discue/mongodb-resource-client from 0.20.0 to 0.21.1 ([bdbb6af](https://github.com/discue/paddle-integration-mongodb/commit/bdbb6af78152fd7be3537c227fcd7b32298b1152))
* **deps:** bump @discue/mongodb-resource-client from 0.21.1 to 0.25.0 ([369445e](https://github.com/discue/paddle-integration-mongodb/commit/369445e6209c4f3b137978889fb973cce5fbae49))
* **deps:** bump @discue/mongodb-resource-client from 0.25.0 to 0.28.0 ([7acb6fd](https://github.com/discue/paddle-integration-mongodb/commit/7acb6fdfa718d3c1b0998582982810c9aede40ad))
* **deps:** bump @discue/mongodb-resource-client from 0.33.0 to 0.39.0 ([d4469d5](https://github.com/discue/paddle-integration-mongodb/commit/d4469d52003a777fba54f9a2aa30262ad150e355))
* **deps:** bump @discue/mongodb-resource-client from 0.39.0 to 0.40.0 ([e2fd5ee](https://github.com/discue/paddle-integration-mongodb/commit/e2fd5eec75c1cf5d10bac581d535a271364c6493))
* **deps:** bump @discue/mongodb-resource-client from 0.40.0 to 1.0.0 ([393927c](https://github.com/discue/paddle-integration-mongodb/commit/393927c64b1d5739cab7f4c66791d588a240e022))
* **deps:** bump actions/checkout from 3 to 4 ([0a8d89b](https://github.com/discue/paddle-integration-mongodb/commit/0a8d89bec9e907a7d3ae22088ff305e2f5e167ba))
* **deps:** bump actions/setup-node from 3 to 4 ([2b8b742](https://github.com/discue/paddle-integration-mongodb/commit/2b8b7425df08b0ba48db2ce19473690755bc96f1))
* **deps:** bump actions/stale from 8 to 9 ([18853fb](https://github.com/discue/paddle-integration-mongodb/commit/18853fbb20a7699ea313c27fa00b318284b3b88d))
* **deps:** bump got from 13.0.0 to 14.2.0 ([4b4ea70](https://github.com/discue/paddle-integration-mongodb/commit/4b4ea708a191ff9dda8f2dae6199b9abaf588654))
* **deps:** bump got from 14.2.1 to 14.3.0 ([69ae62f](https://github.com/discue/paddle-integration-mongodb/commit/69ae62f2de7d3fbfe86215633714ef337aa4bc77))
* **deps:** bump got from 14.3.0 to 14.4.1 ([c2970e1](https://github.com/discue/paddle-integration-mongodb/commit/c2970e1cba0e43c5d1f10e4cd809538ecde6aca0))
* **deps:** bump got from 14.4.1 to 14.4.2 ([4b3a447](https://github.com/discue/paddle-integration-mongodb/commit/4b3a44700b3fc79d9687c6ea16345162615cd13c))
* **deps:** bump got from 14.4.2 to 14.4.5 ([d12c074](https://github.com/discue/paddle-integration-mongodb/commit/d12c074a6a154956c38f27e30aecebebe779f61c))
* **deps:** bump got from 14.4.2 to 14.4.5 ([67c6063](https://github.com/discue/paddle-integration-mongodb/commit/67c6063906c5e7f43e0f6c024b2b9aa357277de0))
* **deps:** bump mongodb from 6.1.0 to 6.2.0 ([af278af](https://github.com/discue/paddle-integration-mongodb/commit/af278af0e29871e82213fd4196fa8b01e0e3fd93))
* **deps:** bump mongodb from 6.2.0 to 6.3.0 ([1b026cd](https://github.com/discue/paddle-integration-mongodb/commit/1b026cdfa1d06b5575385ca75077149e307b45bf))
* **deps:** bump mongodb from 6.5.0 to 6.7.0 ([c98ae35](https://github.com/discue/paddle-integration-mongodb/commit/c98ae35fa432333be4f7a0ff3af80e97c5bf3294))
* **deps:** bump mongodb from 6.7.0 to 6.8.0 ([f6a7391](https://github.com/discue/paddle-integration-mongodb/commit/f6a73910b9e81c8ea9e8efdd4888e0afec9f9530))
* **deps:** declare tracing as runtime dependency ([62c1463](https://github.com/discue/paddle-integration-mongodb/commit/62c1463ad6fedcf725213794ace6fcc1939a923a))
* **deps:** install node-amy dev dependency again ([fdc9645](https://github.com/discue/paddle-integration-mongodb/commit/fdc9645d5c5085055cbdc20d23e7240985bcdb8f))
* **deps:** install node-amy dev dependency again ([5854cfd](https://github.com/discue/paddle-integration-mongodb/commit/5854cfd45c5193ff739fdde2c02d41b36f03b88c))
* **deps:** remove localtunnel dependency ([74b1afc](https://github.com/discue/paddle-integration-mongodb/commit/74b1afc72378aede0648c59131dcfa6f5dd684f8))
* **deps:** revert to chai v4 ([64b8c20](https://github.com/discue/paddle-integration-mongodb/commit/64b8c20171b4a0d9687d80102124439063bb49e6))
* **deps:** update dependencies ([c42651a](https://github.com/discue/paddle-integration-mongodb/commit/c42651aa798e483bf440b98973c993308e00c834))
* **deps:** update dependencies ([150c992](https://github.com/discue/paddle-integration-mongodb/commit/150c992a1d06b7ba8688227e4fc4497df16032a3))
* **deps:** update dependencies ([fba0e15](https://github.com/discue/paddle-integration-mongodb/commit/fba0e15d0529f27fefcfeb60e7b33486a0e55413))
* **deps:** update dependencies ([b074f03](https://github.com/discue/paddle-integration-mongodb/commit/b074f036c0aed61a0ebf76ca7dfe90aa2d228529))
* **deps:** update mongodb resource client ([35f2ea4](https://github.com/discue/paddle-integration-mongodb/commit/35f2ea40cda0fd484b9f228c9719f3072edf93b6))
* fixup npm scripts ([716da0b](https://github.com/discue/paddle-integration-mongodb/commit/716da0bee8e2a344093344c7fc774875e1468aa1))
* make sure telemetry can be disabled with noop module ([a73b705](https://github.com/discue/paddle-integration-mongodb/commit/a73b7055f23e716091a7bcadcd1131291a5b1e70))
* remove test files for upcoming billing feature ([220d37c](https://github.com/discue/paddle-integration-mongodb/commit/220d37c6642056c03fc8a9736ffe5f0d48711bf9))
* update readme ([135deb7](https://github.com/discue/paddle-integration-mongodb/commit/135deb7a6815b694a7b93943120341cbcdcf2cc4))
* update scripts to create types and add major release script ([83e62c3](https://github.com/discue/paddle-integration-mongodb/commit/83e62c3926f6cbe161a41a335462248b0d19e5ee))
* use global setup and teardown again ([c822f30](https://github.com/discue/paddle-integration-mongodb/commit/c822f3001581e5c531f267846642b63e127e5d8a))
* use new eslint config and version ([e9ad17a](https://github.com/discue/paddle-integration-mongodb/commit/e9ad17aae4fc0f211b969ff65893e828c861f765))

## [0.26.0](https://github.com/discue/paddle-integration-mongodb/compare/v0.25.0...v0.26.0) (2023-09-02)


### Bug Fixes

* **hydration:** fix calculation of subscription end date ([492ded3](https://github.com/discue/paddle-integration-mongodb/commit/492ded36871a893d221699fb89f7d8e38abad82a))


### Chores

* **ci:** use node lts ([9e940f8](https://github.com/discue/paddle-integration-mongodb/commit/9e940f86019e7660878bb0a4e9edcc6ace4eb96c))
* **deps-dev:** bump @playwright/test from 1.35.0 to 1.35.1 ([e77f65b](https://github.com/discue/paddle-integration-mongodb/commit/e77f65b89ebad9f9976e7fdf338b9ed730bd8f6d))
* **deps-dev:** bump @playwright/test from 1.35.1 to 1.37.1 ([d6da63b](https://github.com/discue/paddle-integration-mongodb/commit/d6da63bab76e108f2b6845d7301da01e0de4472e))
* **deps-dev:** bump chai from 4.3.7 to 4.3.8 ([43b8bfb](https://github.com/discue/paddle-integration-mongodb/commit/43b8bfb0eb13ca60b46ea5eea5871d289422c3ac))
* **deps-dev:** bump eslint from 8.42.0 to 8.44.0 ([cc2271a](https://github.com/discue/paddle-integration-mongodb/commit/cc2271af3500dfa9cd66cd5bd996345fa28b5f0e))
* **deps-dev:** bump eslint from 8.44.0 to 8.46.0 ([d8ba969](https://github.com/discue/paddle-integration-mongodb/commit/d8ba9697410a0cb5cec7b3f4992a23641c6f111e))
* **deps-dev:** bump eslint from 8.46.0 to 8.48.0 ([c3acf82](https://github.com/discue/paddle-integration-mongodb/commit/c3acf82643829180220ebfbd8b85360afa2df570))
* **deps-dev:** bump mongodb-memory-server from 8.13.0 to 8.15.1 ([0883c4b](https://github.com/discue/paddle-integration-mongodb/commit/0883c4b444cdff43b165fe97a33c18d93e8f8457))
* **deps-dev:** bump nodemon from 2.0.22 to 3.0.1 ([ee85eb8](https://github.com/discue/paddle-integration-mongodb/commit/ee85eb8c060370abc35cc3bcb2a828dc09d48c3c))
* **deps-dev:** bump puppeteer from 20.5.0 to 20.7.4 ([7d8d6cb](https://github.com/discue/paddle-integration-mongodb/commit/7d8d6cb055e3918019126bfc94dbeae88ef4da2f))
* **deps-dev:** bump puppeteer from 20.7.4 to 20.9.0 ([7fd5f4a](https://github.com/discue/paddle-integration-mongodb/commit/7fd5f4a09729635df2db4675b45f82a004c0f428))
* **deps:** bump @discue/mongodb-resource-client from 0.3.0 to 0.7.0 ([99ec590](https://github.com/discue/paddle-integration-mongodb/commit/99ec5904c870f2541a003151a62c75807fee81ff))
* **deps:** bump @discue/mongodb-resource-client from 0.7.0 to 0.8.0 ([042af03](https://github.com/discue/paddle-integration-mongodb/commit/042af033ebf0aadaa04d8d6f6ddc13d7d5c24fc3))
* **deps:** bump html-entities from 2.3.5 to 2.4.0 ([7eca6a4](https://github.com/discue/paddle-integration-mongodb/commit/7eca6a442a89cda40f503d06889eb70e2d92348f))
* **deps:** bump mongodb from 5.7.0 to 6.0.0 ([1151819](https://github.com/discue/paddle-integration-mongodb/commit/1151819d123c0f717a47ad201f3c914fe279fe29))
* **deps:** update resource client ([7684454](https://github.com/discue/paddle-integration-mongodb/commit/7684454807bb717a08fe6fad800698c1f5e43112))
* **hooks:** also store effective cancel date ([7e337dc](https://github.com/discue/paddle-integration-mongodb/commit/7e337dca6b630c66248291cbff12f552f4de0418))
* update date field selector ([9957077](https://github.com/discue/paddle-integration-mongodb/commit/9957077b4275ff8fc486437dcb57d6101205374f))

## [0.25.0](https://github.com/discue/paddle-integration-mongodb/compare/v0.24.0...v0.25.0) (2023-06-10)


### Features

* **storage:** allow passing mongo client ([8b962fe](https://github.com/discue/paddle-integration-mongodb/commit/8b962feda08f821b7ebd2c96aa23bf7feaf98c2e))
* use discue mongo db storage client ([f8c2707](https://github.com/discue/paddle-integration-mongodb/commit/f8c2707547ffa13509aa0e96dffd11c73568ba7a))


### Chores

* **deps-dev:** bump puppeteer from 20.4.0 to 20.5.0 ([c44dd79](https://github.com/discue/paddle-integration-mongodb/commit/c44dd79b6d67f41a33f9b90d044962d043567a11))
* **deps:** bump actions/stale from 7 to 8 ([75ad3fd](https://github.com/discue/paddle-integration-mongodb/commit/75ad3fd8ae4b26c16596fadb9bbda25408a4acfb))
* **deps:** update dependencies ([e853f1b](https://github.com/discue/paddle-integration-mongodb/commit/e853f1b0e8a48ca6ef6a3e5af133879a6a8dff2f))

## [0.24.0](https://github.com/discue/paddle-integration-mongodb/compare/v0.1.0...v0.24.0) (2023-05-28)


### Features

* add actual server middleware ([08e1427](https://github.com/discue/paddle-integration-mongodb/commit/08e142762979b9eea20b8f94b41e34e17d21b37d))
* add body parser module ([b30f1a9](https://github.com/discue/paddle-integration-mongodb/commit/b30f1a98c6541c2605e8556ca70ccced566691f2))
* add client function to create customData objects ([ca75e16](https://github.com/discue/paddle-integration-mongodb/commit/ca75e165da6f9a507aefe4e13974e9dcdc47c518))
* add get start and end date method ([3797f07](https://github.com/discue/paddle-integration-mongodb/commit/3797f07e0d6167af02035bf7e993a21c843e3b37))
* add html encoder ([d4cd798](https://github.com/discue/paddle-integration-mongodb/commit/d4cd798126c2b917b98489d865314d50a36a1a5a))
* add jsdoc to main export to enable typings ([9453b92](https://github.com/discue/paddle-integration-mongodb/commit/9453b9259ba81423d98d9726d673a9943b2e0a06))
* add method to compile payments list ([8b90029](https://github.com/discue/paddle-integration-mongodb/commit/8b90029e34419fa083feed6d7773899d7bb29df4))
* add method to compile status trail ([5fe2b5f](https://github.com/discue/paddle-integration-mongodb/commit/5fe2b5f08fdb35529a8894d7cb9c570b1c2ab629))
* add methods for payments hooks ([f13ab2f](https://github.com/discue/paddle-integration-mongodb/commit/f13ab2f8b132642dd3981b4e931d7c596c17474c))
* add mongodb storage module ([72c21f0](https://github.com/discue/paddle-integration-mongodb/commit/72c21f06f06d89fd2713e1dbe72dbc88426cba53))
* add upcoming payment also to payments trail ([7c34369](https://github.com/discue/paddle-integration-mongodb/commit/7c34369f231844e6d537ce1640e5315f7346f7fb))
* after sub updated deactivate prev sub ([5fad2c5](https://github.com/discue/paddle-integration-mongodb/commit/5fad2c5e5267daf98a13ccfe78f56e063340dec5))
* allow logging of outgoing requests ([1fee644](https://github.com/discue/paddle-integration-mongodb/commit/1fee644742dca4cfba6bfad14f10b0663b6db8fb))
* allow resource name to be customized ([00f81f9](https://github.com/discue/paddle-integration-mongodb/commit/00f81f922349a5b7cf8a11cd498e9f58cb0b8411))
* allow subs to be stored in nested collections ([8f7b875](https://github.com/discue/paddle-integration-mongodb/commit/8f7b875e2603beefbb7d09e7833f4053652edf54))
* allow to calc sub state in the future ([2bba501](https://github.com/discue/paddle-integration-mongodb/commit/2bba5019e8a98e4aad0abfec1cdfa5ca47271218))
* also store alert id and name in status models ([ed8bff1](https://github.com/discue/paddle-integration-mongodb/commit/ed8bff11c41354be52ee63f4307f0b550c1cf7f5))
* **api:** add get order method ([2765fcc](https://github.com/discue/paddle-integration-mongodb/commit/2765fcc0176f782124507168c4f5e830a36bd74d))
* **api:** add get plan by id method ([a1b1fcd](https://github.com/discue/paddle-integration-mongodb/commit/a1b1fcdeed07c4e7c6ca9554d34e777fe59b75c8))
* **api:** add get single subscription method ([552d513](https://github.com/discue/paddle-integration-mongodb/commit/552d5133703ebd332e20ebd305de1a59e4cd54d0))
* **api:** add get subscription payments method ([4c5909e](https://github.com/discue/paddle-integration-mongodb/commit/4c5909e663f4d3b520c252f453758a5d252f9781))
* **api:** add list plans method ([f5d5ba9](https://github.com/discue/paddle-integration-mongodb/commit/f5d5ba960ffcf182639eeab2fbd62a21eb188d7e))
* **api:** add list products method ([be6f391](https://github.com/discue/paddle-integration-mongodb/commit/be6f3910dc1ae003720230b09617eee79c0aaad3))
* **api:** add refund payment method ([a9d68e2](https://github.com/discue/paddle-integration-mongodb/commit/a9d68e2048a2a2f2948b6128a51fc6ac179f1e7b))
* **api:** add service for paddle subscriptions api ([a1d2af1](https://github.com/discue/paddle-integration-mongodb/commit/a1d2af1f4554c6f12b05f6142f27da8fa7fa2a1d))
* **api:** allow pagination and fetching all subs ([df3ecae](https://github.com/discue/paddle-integration-mongodb/commit/df3ecae4111ef8a525c0879c4bae528bb39f2fe2))
* **api:** enable customization of http params ([4c8f6cb](https://github.com/discue/paddle-integration-mongodb/commit/4c8f6cb86688bc5fbccd46a2cd6f27ca3c38449f))
* **api:** ensure api is always initialized before first request ([d96ec94](https://github.com/discue/paddle-integration-mongodb/commit/d96ec94bfa96f2f20f54e93e6bafc1976ff838f1))
* **api:** import got only once ([84ad151](https://github.com/discue/paddle-integration-mongodb/commit/84ad1512ab99803fd91d79f323f40ebfa3b14095))
* calculate subscription status per subscription plan id ([9eb1e30](https://github.com/discue/paddle-integration-mongodb/commit/9eb1e30a835cb0c45c993cf16c2f4dfdd86e8a6c))
* do not add upcoming payment if sub expires before ([11816de](https://github.com/discue/paddle-integration-mongodb/commit/11816dec8e4d7fe9d9f09ea66bf93f7f27aa8217))
* dont store subscription in subcollection ([572e8f0](https://github.com/discue/paddle-integration-mongodb/commit/572e8f09fc02184473b73f3bd61428bb4368588f))
* export api constructor too ([96f6011](https://github.com/discue/paddle-integration-mongodb/commit/96f6011236b0ae7513bb6f34065c8ab53b7b9485))
* extract ids from namespaced object ([66de639](https://github.com/discue/paddle-integration-mongodb/commit/66de639799cf05fd4060ead0a3e29adc020fafc6))
* handle errors in middleware gracefully ([1913ac7](https://github.com/discue/paddle-integration-mongodb/commit/1913ac7107a1daac9e67d2a39245f64dc194aaca))
* html encode also all subscription events ([95353ba](https://github.com/discue/paddle-integration-mongodb/commit/95353ba8f78723b6772661a87322c9228107bb93))
* implement create, update and cancel subscription ([bbb716b](https://github.com/discue/paddle-integration-mongodb/commit/bbb716bd24c6a7caab6330bd69b3eafb6659f394))
* implement get subscription info method ([a200371](https://github.com/discue/paddle-integration-mongodb/commit/a200371ce6f7e46911ddd4a3af4f6080a3e3be73))
* **middleware:** emit events after successful hook processing ([190f0a5](https://github.com/discue/paddle-integration-mongodb/commit/190f0a5990ebc65c5c5e1e8b2e6c18fbb6e6a665))
* return future subscription info too ([e6b1803](https://github.com/discue/paddle-integration-mongodb/commit/e6b1803b88d3a047295e2848b38153ac70c0560d))
* return payment trail per sub plan id ([9437d7d](https://github.com/discue/paddle-integration-mongodb/commit/9437d7d585671ace989743c5cd59d3dbc6644a84))
* return start/end date per sub plan id ([23538c6](https://github.com/discue/paddle-integration-mongodb/commit/23538c60b2eafd25fa8d92411a4783ed8bb8359b))
* return status trail per sub plan id ([251576a](https://github.com/discue/paddle-integration-mongodb/commit/251576a54d2cb82ed4d1aeba3a43f07b0161019a))
* sort payments trail descending ([0d833f3](https://github.com/discue/paddle-integration-mongodb/commit/0d833f311a0d48d128921fc8c58408a0deb1b922))
* sort status trail also descending ([72009a2](https://github.com/discue/paddle-integration-mongodb/commit/72009a2f5d39fbdc29781c6740d7e48dac4218d0))
* **subscription-hydration:** also hydrate payments ([1a81dc5](https://github.com/discue/paddle-integration-mongodb/commit/1a81dc587a6e41340d13eabc416e9620a2bd450f))
* **subscription-hydration:** also store instalments and sale_gross values ([d423e66](https://github.com/discue/paddle-integration-mongodb/commit/d423e6674196241945a808c8eafc9e06c36afbf5))
* **subscription-hydration:** check if plan already active ([5d0d90e](https://github.com/discue/paddle-integration-mongodb/commit/5d0d90ed61282bc895b5fb20de97fdfdbbddb8e8))
* **subscription-hydration:** require plan id instead of subscription id param ([48394ce](https://github.com/discue/paddle-integration-mongodb/commit/48394ce9ee0e9107ccacedddfe6dfac6375b793c))
* **subscription-hydration:** set effective cancellation date based on last payment ([931d9e6](https://github.com/discue/paddle-integration-mongodb/commit/931d9e6751bfa8cc6a980ecafbfc9706d66eeea5))
* **subscription-info:** add cancel subscription method ([888c5f2](https://github.com/discue/paddle-integration-mongodb/commit/888c5f2cc5967b9a20dda80d961ad80b3b002da8))
* **subscription-info:** add find subscription id method ([7ff3dbc](https://github.com/discue/paddle-integration-mongodb/commit/7ff3dbc0674f6e1c3a75f7cfb8f74893ac689541))
* **subscription-info:** add update subscription plan method ([3acc96f](https://github.com/discue/paddle-integration-mongodb/commit/3acc96fa8b5c40b33027f688d53c80cb1f6b6efa))
* **subscription-info:** allow hydration of local status ([2afa7dd](https://github.com/discue/paddle-integration-mongodb/commit/2afa7dde5dc750e7f428e2e6c0d5e42c6cd9a508))
* **subscription-info:** catch and log api errors ([8dcc0f0](https://github.com/discue/paddle-integration-mongodb/commit/8dcc0f0419b3fe3444d0ae23adbf18c55dc279ab))
* **subscription-info:** check whether sub was already hydrated ([872caa5](https://github.com/discue/paddle-integration-mongodb/commit/872caa53d9791552ef899f8b928417db8a18c359))
* **subscription-info:** expect object or resource ids ([50e037a](https://github.com/discue/paddle-integration-mongodb/commit/50e037a4610d4f859a0c87296991e64019060c28))
* **subscription-info:** return update and cancel url too ([b15b5a9](https://github.com/discue/paddle-integration-mongodb/commit/b15b5a9ed3687cdf82089cdc2049aa4f6af1e5a4))
* **subscription-info:** use custom data to verify api client ([7a71780](https://github.com/discue/paddle-integration-mongodb/commit/7a71780662462c461f3aaa38f2b0931da485de03))
* **subscriptioninfo:** return more details for hydrated payments ([137d157](https://github.com/discue/paddle-integration-mongodb/commit/137d1573e4d776ebe04768a257f90a16bbd01934))
* throw errors if arguments are falsy ([8ef9797](https://github.com/discue/paddle-integration-mongodb/commit/8ef979783d7b1049a9bbfd34e1371b539f4df376))
* update module exports ([2b4e952](https://github.com/discue/paddle-integration-mongodb/commit/2b4e9526413445104c4d3c42249131e7fd7b7163))
* use mongodb storage module ([cc8e939](https://github.com/discue/paddle-integration-mongodb/commit/cc8e939154004cd72df0794ebdc4646657879ff4))


### Bug Fixes

* cannot import without es6 ([3e1eb50](https://github.com/discue/paddle-integration-mongodb/commit/3e1eb50f622f42c5e523b9490f67c295ca692a49))
* check if payments exists before accessing one of them ([1712868](https://github.com/discue/paddle-integration-mongodb/commit/1712868421ad3b95e58643bce5abf68d46586039))
* **html-encoder:** do not encode value false ([f14de08](https://github.com/discue/paddle-integration-mongodb/commit/f14de08edd8e8d99d29b445762ff94e6fb0617e7))
* **middleware:** handle of failed and refunded payments ([6c7420c](https://github.com/discue/paddle-integration-mongodb/commit/6c7420c664f405eee53dac392ae7698a4bbe314c))
* module exports ([d09a39a](https://github.com/discue/paddle-integration-mongodb/commit/d09a39a77af3189ce594dc8146e2f85a0fe920b3))
* null pointers when using resource name starting with _ ([69c2f19](https://github.com/discue/paddle-integration-mongodb/commit/69c2f1995be61038da9892ae84689cdc8e2898b4))
* payments overwritten by subscription hooks ([c28f44a](https://github.com/discue/paddle-integration-mongodb/commit/c28f44a4fba0f7fc707aebee5287a57e3997f1fc))
* start_at property not used in condition ([a8817f5](https://github.com/discue/paddle-integration-mongodb/commit/a8817f5becc4904f98d66f08717e10793c71bb68))
* **subscription-info:** return subscription and not parent object ([af8d208](https://github.com/discue/paddle-integration-mongodb/commit/af8d208f5027277402a4b5c65a290598c2985495))
* timestamp not passed to get stard and end dates ([fa504db](https://github.com/discue/paddle-integration-mongodb/commit/fa504db94d73d591fcbf582d626e68a5bbdf7893))
* used wrong quantity property name ([aafae89](https://github.com/discue/paddle-integration-mongodb/commit/aafae8947a3886ad15d73a96488bd457c5c3d1cc))


### Refactorings

* add comments and extract to smaller methods ([ec0a44a](https://github.com/discue/paddle-integration-mongodb/commit/ec0a44a4d1f0d89e79bd6748174aa5ed79549b4d))
* **api:** add api version to path elements ([cfee2b2](https://github.com/discue/paddle-integration-mongodb/commit/cfee2b243fe26117d0de6166a04b4b663d1d2dfe))
* **api:** create base urls for vendor and checkout api ([497eca1](https://github.com/discue/paddle-integration-mongodb/commit/497eca197304476053dca37443695b959b231a52))
* extract get subscription plan id to separate method ([6231ce6](https://github.com/discue/paddle-integration-mongodb/commit/6231ce69fe0f7be834328bd26d286872b865bf50))
* move subscription hooks handling to own component ([f769074](https://github.com/discue/paddle-integration-mongodb/commit/f769074b627cf575ea4ab018db7b7cb4e69870d2))
* prepare usage of nested firestore resource ([d4fddb8](https://github.com/discue/paddle-integration-mongodb/commit/d4fddb8dd4799566b3c210b39daf679e938bf630))
* promote subscription hydration to own component ([012fa3b](https://github.com/discue/paddle-integration-mongodb/commit/012fa3b33840e452bd4bd36fd1b7713a0f629a1d))
* rename all status methods ([3621661](https://github.com/discue/paddle-integration-mongodb/commit/36216613af9a59a19c013ce0d983fa2875b99228))
* rename local variable ([ed9a076](https://github.com/discue/paddle-integration-mongodb/commit/ed9a076724cd65af7950a767d0dc0621e8bb453d))
* rename private method name ([0fa4c74](https://github.com/discue/paddle-integration-mongodb/commit/0fa4c74196a6153fe4c25c9c88c3debf02efdd8d))
* rename sub not found variable ([08c65d2](https://github.com/discue/paddle-integration-mongodb/commit/08c65d26f17f0a8d648dabd259b1da5a310f6aec))
* split hook handling and subscription info components ([a5adf16](https://github.com/discue/paddle-integration-mongodb/commit/a5adf16be75b171554327c87d219e6052ca7000c))
* **subscription-hooks:** do not flatten objects ([497bbbe](https://github.com/discue/paddle-integration-mongodb/commit/497bbbe70c9e987eda3c85f214334861550748bb))
* **subscription-hooks:** return promise instead of waiting it ([7e9e228](https://github.com/discue/paddle-integration-mongodb/commit/7e9e22825df8b3c22693ead8182215559333096a))
* use event_time instead of start_time for status ([ab0a2ec](https://github.com/discue/paddle-integration-mongodb/commit/ab0a2eca1ab06bd72d3442fa29e91c82b913c632))
* use event_time instead of start_time for status ([45d2d2c](https://github.com/discue/paddle-integration-mongodb/commit/45d2d2c85138e63d2e3ea19ec57a57d993c43c8e))
* use singular for main component exports ([c09c1e3](https://github.com/discue/paddle-integration-mongodb/commit/c09c1e39f8daa386fc0454a43208991dd915e5ec))


### Chores

* add and update bash scripts ([1a7158c](https://github.com/discue/paddle-integration-mongodb/commit/1a7158c1c81071e4578986c15edd7cf171d4f790))
* add firestore functions ([0d41cc2](https://github.com/discue/paddle-integration-mongodb/commit/0d41cc2177d2997dbada889fc54b7199305aa893))
* add hook server ([cb187a7](https://github.com/discue/paddle-integration-mongodb/commit/cb187a7b71d369e53af8cf7de91af9ca30c655de))
* add jsdoc description to cancel subscription method ([c845af3](https://github.com/discue/paddle-integration-mongodb/commit/c845af392900c26901223799766652928eb5aab1))
* add local firebase emulator config ([25eaf32](https://github.com/discue/paddle-integration-mongodb/commit/25eaf325853530dda6f6b05934361417e35f054f))
* add missing whitespace ([9db8c27](https://github.com/discue/paddle-integration-mongodb/commit/9db8c27e536659be2fb02e78b314b3fff89bd287))
* add order details callback ([1c3ae84](https://github.com/discue/paddle-integration-mongodb/commit/1c3ae8474cca980d0b7ac59a85a0c007b36a3266))
* add payloads of client events ([3ebd4fd](https://github.com/discue/paddle-integration-mongodb/commit/3ebd4fda6256282928b3feb4c8595be3898e7b07))
* add prefix to pre checkout placeholder ([1e713c5](https://github.com/discue/paddle-integration-mongodb/commit/1e713c5269647bd509e42f502e568f1f2d9ee47f))
* add simple logger ([aad2ddf](https://github.com/discue/paddle-integration-mongodb/commit/aad2ddf3ac5fd8ac51e4e65db2f8c515875bd5c8))
* add start date for placeholder ([e664c2b](https://github.com/discue/paddle-integration-mongodb/commit/e664c2b5a3601a2eb6dd6a95044fa2d17805196d))
* add test script ([5308880](https://github.com/discue/paddle-integration-mongodb/commit/53088801ca8d383f79c333e7dfb1e06606254f10))
* allow 10s clockdrift checking sub activeness ([c77e094](https://github.com/discue/paddle-integration-mongodb/commit/c77e094c9022900c7418c03c832677a3bc7ae8ad))
* allow node globals ([02b929e](https://github.com/discue/paddle-integration-mongodb/commit/02b929e29e1db9dc4e6e518a478f79812cfb8623))
* also kill hook server if necessary ([52be3a7](https://github.com/discue/paddle-integration-mongodb/commit/52be3a7d153cdf6989b58320b42593fcaabc980b))
* also store subscription id for cancellation events ([4f73b3f](https://github.com/discue/paddle-integration-mongodb/commit/4f73b3f2a0422a518e077a3e23f6b7425fa910b7))
* **ci:** add secrets to e2e test environment ([c5a0714](https://github.com/discue/paddle-integration-mongodb/commit/c5a0714fbc64fe1fb15b92ac6eece27bcba36d22))
* **ci:** increase test timeout ([4a47350](https://github.com/discue/paddle-integration-mongodb/commit/4a47350092b45c5b253544d21d49dd7fa5f9fe85))
* **ci:** install playwright deps before e2e tests ([5ccd204](https://github.com/discue/paddle-integration-mongodb/commit/5ccd204b3632ddc8ce0a7b84b50454e24be652a7))
* **ci:** run also e2e tests ([ab2265d](https://github.com/discue/paddle-integration-mongodb/commit/ab2265da85b831066c1110d83d3e7973207b707b))
* **ci:** run only one job in parallel ([3962cad](https://github.com/discue/paddle-integration-mongodb/commit/3962cadb4880f4be52da4245614c3d6b808df082))
* **ci:** use node 16 ([4e4b62a](https://github.com/discue/paddle-integration-mongodb/commit/4e4b62a3a55c9e842c83699ffabb863ad67320b5))
* decrease logging ([e6fa37d](https://github.com/discue/paddle-integration-mongodb/commit/e6fa37db0ee745dd4b370581c01d9af7866ca30e))
* **deps-dev:** bump @playwright/test from 1.25.1 to 1.26.1 ([ec11ed7](https://github.com/discue/paddle-integration-mongodb/commit/ec11ed73d4c92170424c763b0528f15551b44b2c))
* **deps-dev:** bump @playwright/test from 1.28.0 to 1.28.1 ([1c838e8](https://github.com/discue/paddle-integration-mongodb/commit/1c838e8fce2486258ca7b8714cab2d6d2f0ea4db))
* **deps-dev:** bump @playwright/test from 1.29.1 to 1.30.0 ([ac2c6ed](https://github.com/discue/paddle-integration-mongodb/commit/ac2c6eda2ec54cc27095049f6bb12490e3f22c08))
* **deps-dev:** bump @playwright/test from 1.30.0 to 1.31.1 ([a1ec3d0](https://github.com/discue/paddle-integration-mongodb/commit/a1ec3d0ce39fb73917687a0a14b1c8f1e19d70e4))
* **deps-dev:** bump chai from 4.3.6 to 4.3.7 ([5e5ed59](https://github.com/discue/paddle-integration-mongodb/commit/5e5ed5913a5b2f6fe759c84d36dbdc3edea60a90))
* **deps-dev:** bump eslint from 8.23.0 to 8.24.0 ([ba6d98c](https://github.com/discue/paddle-integration-mongodb/commit/ba6d98c7e276e0f9e0a44d8686a96b45078b36e4))
* **deps-dev:** bump eslint from 8.24.0 to 8.26.0 ([cc75438](https://github.com/discue/paddle-integration-mongodb/commit/cc75438bd55557e1baac9ad6a58f4bd3c5ec420c))
* **deps-dev:** bump eslint from 8.30.0 to 8.31.0 ([075e140](https://github.com/discue/paddle-integration-mongodb/commit/075e14036892d8c9df3030db1757c4c967eb2152))
* **deps-dev:** bump eslint from 8.31.0 to 8.33.0 ([f925f25](https://github.com/discue/paddle-integration-mongodb/commit/f925f25845a9a85d7b7b5d782c38a174a9ca17b7))
* **deps-dev:** bump eslint from 8.33.0 to 8.35.0 ([bd322b5](https://github.com/discue/paddle-integration-mongodb/commit/bd322b5eccaac8f5b2de0ad623a814cf25426132))
* **deps-dev:** bump express from 4.18.1 to 4.18.2 ([036c12f](https://github.com/discue/paddle-integration-mongodb/commit/036c12f18137ee6352a9068b3080230c9f5a34c8))
* **deps-dev:** bump firebase-tools from 11.19.0 to 11.22.0 ([cd5f827](https://github.com/discue/paddle-integration-mongodb/commit/cd5f8273456c54de9debd014f41c05f7455b2a03))
* **deps-dev:** bump firebase-tools from 11.22.0 to 11.24.0 ([b178099](https://github.com/discue/paddle-integration-mongodb/commit/b178099fd5d8861ff7791d47af2d8efd8adf8edb))
* **deps-dev:** bump firebase-tools from 11.8.0 to 11.13.0 ([f4b4159](https://github.com/discue/paddle-integration-mongodb/commit/f4b4159e09c6b78b59638ea5b0471c4f62524fdd))
* **deps-dev:** bump mocha from 10.0.0 to 10.1.0 ([6ec5c32](https://github.com/discue/paddle-integration-mongodb/commit/6ec5c3235feb26fc1a863732507f98882fe1331c))
* **deps-dev:** bump nodemon from 2.0.19 to 2.0.20 ([1a5574e](https://github.com/discue/paddle-integration-mongodb/commit/1a5574e769a296f2779ddae91b3e6a00ff92a522))
* **deps-dev:** bump puppeteer from 16.2.0 to 17.0.0 ([ab7c437](https://github.com/discue/paddle-integration-mongodb/commit/ab7c437eff0ccd4645e2bde3f9741293172faeea))
* **deps-dev:** bump puppeteer from 17.0.0 to 18.0.5 ([66d5835](https://github.com/discue/paddle-integration-mongodb/commit/66d583522aa1cf929e5de34e521577512567439f))
* **deps-dev:** bump puppeteer from 18.0.5 to 19.2.0 ([507a9cf](https://github.com/discue/paddle-integration-mongodb/commit/507a9cfe43c97aa3a8c37c88ca7281df752fa087))
* **deps-dev:** bump puppeteer from 19.4.1 to 19.6.2 ([8b16085](https://github.com/discue/paddle-integration-mongodb/commit/8b1608587b6dec760040a831fb35854b630a4a2c))
* **deps-dev:** bump puppeteer from 19.6.3 to 19.7.2 ([321de3a](https://github.com/discue/paddle-integration-mongodb/commit/321de3a9f833b8af7322cb9aaeeffe22e279e914))
* **deps:** bump actions/stale from 5 to 6 ([3ab054b](https://github.com/discue/paddle-integration-mongodb/commit/3ab054bf4ba0c757b81d9c4bc24b14895985cf15))
* **deps:** bump actions/stale from 6 to 7 ([857662c](https://github.com/discue/paddle-integration-mongodb/commit/857662ce94fdf3da1efefc61331edf3c25f434d5))
* **deps:** bump firebase-admin from 11.0.1 to 11.2.0 ([16f531a](https://github.com/discue/paddle-integration-mongodb/commit/16f531a30ebba7db0be2ebb6446467e271eae8d1))
* **deps:** bump firebase-admin from 11.2.0 to 11.3.0 ([138944c](https://github.com/discue/paddle-integration-mongodb/commit/138944ca0d740e649ed89bc577f70d7b0f24ffa2))
* **deps:** bump firebase-admin from 11.4.1 to 11.5.0 ([8a4538a](https://github.com/discue/paddle-integration-mongodb/commit/8a4538ae1738f19c730fd742dfd7671d61e963f1))
* **deps:** bump got from 12.4.1 to 12.5.1 ([432a01a](https://github.com/discue/paddle-integration-mongodb/commit/432a01a4a899f2606ac5940a2f15340d8c73944b))
* **deps:** bump got from 12.5.1 to 12.5.2 ([5e30051](https://github.com/discue/paddle-integration-mongodb/commit/5e3005128f05d6d9874a141615bd7628e345944e))
* **deps:** install e2e test dependencies ([7cde9cf](https://github.com/discue/paddle-integration-mongodb/commit/7cde9cf4da4eabe42295f121f6df0a1adcd395c7))
* **deps:** install got ([b09c7b1](https://github.com/discue/paddle-integration-mongodb/commit/b09c7b1682813e52af4016369fcdf653a63dfc6b))
* **deps:** install html entities ([fea9bb4](https://github.com/discue/paddle-integration-mongodb/commit/fea9bb40d83c1f23cd91d9f5f673878ef7e3f206))
* **deps:** install mongodb dep ([f655a93](https://github.com/discue/paddle-integration-mongodb/commit/f655a931447f49d4ae56bc65c75b28c93fc94fb4))
* **deps:** make firebase tools a dev dep ([829bc39](https://github.com/discue/paddle-integration-mongodb/commit/829bc39bcb7c1cae37c80b51559ec539f3b12996))
* **deps:** remove dependency to playwright-core ([b057a17](https://github.com/discue/paddle-integration-mongodb/commit/b057a1723eeef58f26608017c72788d2b54bae04))
* **deps:** remove firebase, add mongodb dependencies ([3b72445](https://github.com/discue/paddle-integration-mongodb/commit/3b72445fa9413acfd13bcc44c46316566d0510a1))
* **deps:** update dependencies ([6c2bd92](https://github.com/discue/paddle-integration-mongodb/commit/6c2bd924eeb8695d8851943cccbe8e1c9170a25f))
* **deps:** update dependencies ([029c9cc](https://github.com/discue/paddle-integration-mongodb/commit/029c9cc1c81c98f4f842c88340982acb207dd24a))
* **deps:** update dependencies ([f3edfd7](https://github.com/discue/paddle-integration-mongodb/commit/f3edfd78869808fca467fab9c9a562052db13cf0))
* **deps:** update dependencies ([682932d](https://github.com/discue/paddle-integration-mongodb/commit/682932dc2fa2934d4a611d6a78f8e80a18f7f015))
* **deps:** update dependencies ([a214011](https://github.com/discue/paddle-integration-mongodb/commit/a214011a957d1854707a3c5ef98b188829323f66))
* do not encode payments twice ([b388245](https://github.com/discue/paddle-integration-mongodb/commit/b388245670b3d7037aaee0bbc85d4bbae873a811))
* do not reassign result ([cc8e2b4](https://github.com/discue/paddle-integration-mongodb/commit/cc8e2b489a0234620d40bdeb876e83facaac353b))
* do not source hidden env file ([7e51518](https://github.com/discue/paddle-integration-mongodb/commit/7e51518cf6a335b9385f2ed362c91ada5c0f5162))
* do not store signature with payments ([186f446](https://github.com/discue/paddle-integration-mongodb/commit/186f446f92cfa38a89f2fd2b6d2992411f166c21))
* **docs:** add jsdoc to all functions ([567adb1](https://github.com/discue/paddle-integration-mongodb/commit/567adb1d217fac8de6f8d4ea0336894b316c9a23))
* **docs:** add jsdoc types ([0b86cae](https://github.com/discue/paddle-integration-mongodb/commit/0b86cae95d8b9e98e3ebf948a3dbfa1be77871df))
* **docs:** update readme ([aae9412](https://github.com/discue/paddle-integration-mongodb/commit/aae9412f8b7f9ebd288abbd900e0cf6da16360cd))
* **docs:** update readme ([fe85bf0](https://github.com/discue/paddle-integration-mongodb/commit/fe85bf0177e64184e947345b2a29b6806f7e9b20))
* **docs:** update readme ([27d145f](https://github.com/discue/paddle-integration-mongodb/commit/27d145f2cda1535583929b38e73c5f02f5be1d96))
* **error-handler:** during tests always return 200 ([d213d48](https://github.com/discue/paddle-integration-mongodb/commit/d213d48d0dc68e9d24ab8ad429419ae1c5388b56))
* **firebase:** prevent port collisions ([452a180](https://github.com/discue/paddle-integration-mongodb/commit/452a180579dc3a039351b498b1c89ae81cc88570))
* fix type on description ([4372e05](https://github.com/discue/paddle-integration-mongodb/commit/4372e0518d06139a5ce9d241ac0f9f93ad5cc004))
* **gitignore:** ignore test-results folder ([637faad](https://github.com/discue/paddle-integration-mongodb/commit/637faad5aa548cfbfb38e11c8378acc9b385f6e0))
* handle unknown events gracefully ([694d1f1](https://github.com/discue/paddle-integration-mongodb/commit/694d1f1404a8842250deca322613bf2ed7ef3e40))
* **hooks:** do not store unit_price ([68485d7](https://github.com/discue/paddle-integration-mongodb/commit/68485d7f99f549182374368d987030848da56540))
* **lint:** dont require unix style line ending ([bad298f](https://github.com/discue/paddle-integration-mongodb/commit/bad298f15bb22d75dd49c5e43bb09cacc0c79885))
* log binary and args when starting and stopping ([9a8e67f](https://github.com/discue/paddle-integration-mongodb/commit/9a8e67f91af900cab4b7972c507d055433c93e8d))
* **logger:** update name ([085fc1c](https://github.com/discue/paddle-integration-mongodb/commit/085fc1c49cfebb9af21a6348c32f3a2d4c681a1d))
* make git ignore .env.local files ([ee5ea4e](https://github.com/discue/paddle-integration-mongodb/commit/ee5ea4e3ca239080a605a87d36d2b7f934819b55))
* make sure test scripts actually run ([e06602b](https://github.com/discue/paddle-integration-mongodb/commit/e06602b976640df60c2fbcb17926f08033d6eb90))
* on ci/cd envs return 202 even if not found ([5cb2502](https://github.com/discue/paddle-integration-mongodb/commit/5cb2502a1bc0ae30c32a9222cd85ea4b0ce61afe))
* prevent duplicate code when handling payments ([5bf1ffd](https://github.com/discue/paddle-integration-mongodb/commit/5bf1ffd69f6879fa7b55885ab517bf630acc0a71))
* **release:** 0.10.0 ([c767990](https://github.com/discue/paddle-integration-mongodb/commit/c767990bb2bd6d70d450dbc3da972bb8fbaf4a24))
* **release:** 0.10.1 ([b7d2cb7](https://github.com/discue/paddle-integration-mongodb/commit/b7d2cb79ebcac437b53c48088c4ec840326efbfa))
* **release:** 0.11.0 ([d5d9c9e](https://github.com/discue/paddle-integration-mongodb/commit/d5d9c9e3707292380cd5ce5f62fb7c0ce2dd5154))
* **release:** 0.12.0 ([28f70e2](https://github.com/discue/paddle-integration-mongodb/commit/28f70e20cde5fc1999aa864d04d0b2437480ecee))
* **release:** 0.13.0 ([b638156](https://github.com/discue/paddle-integration-mongodb/commit/b638156de1bf7d05cd43b7e4bd4b429ad6463580))
* **release:** 0.14.0 ([faaa24a](https://github.com/discue/paddle-integration-mongodb/commit/faaa24af73412aedd13596a4c9aad5b0d92bbb07))
* **release:** 0.15.0 ([fc2ebf0](https://github.com/discue/paddle-integration-mongodb/commit/fc2ebf0e476c524d0dad3159a60cc5961ce8c6d0))
* **release:** 0.15.1 ([41b3d5d](https://github.com/discue/paddle-integration-mongodb/commit/41b3d5d3045ab14e27cbcb3076e5e5b23d0cc134))
* **release:** 0.16.0 ([cc92090](https://github.com/discue/paddle-integration-mongodb/commit/cc92090bfbd66227d9bd58ecff8f124c38def87f))
* **release:** 0.17.0 ([0422459](https://github.com/discue/paddle-integration-mongodb/commit/042245989553a771650cfc073b72d4877b45b95a))
* **release:** 0.18.0 ([fd4cffb](https://github.com/discue/paddle-integration-mongodb/commit/fd4cffb893d6a2076d3d64df2f5f14fa2744066d))
* **release:** 0.19.0 ([b5fe118](https://github.com/discue/paddle-integration-mongodb/commit/b5fe118867fce09ae7c07fc83bd3e9ec81b99053))
* **release:** 0.2.0 ([ae5cf2c](https://github.com/discue/paddle-integration-mongodb/commit/ae5cf2c786a1624e2ed61249c0493993c44a8ffc))
* **release:** 0.20.0 ([1ded858](https://github.com/discue/paddle-integration-mongodb/commit/1ded858846c84c5c588ef30e0d4c2483a4e755f7))
* **release:** 0.21.0 ([456df1b](https://github.com/discue/paddle-integration-mongodb/commit/456df1b21cf310d679dc985c727ddeae6403a6f4))
* **release:** 0.22.0 ([c243686](https://github.com/discue/paddle-integration-mongodb/commit/c2436860fff97eec04b41015a39aca795161b229))
* **release:** 0.23.0 ([56dd77f](https://github.com/discue/paddle-integration-mongodb/commit/56dd77f8d190c703e1643747bb4b2ab9b4df1628))
* **release:** 0.23.1 ([b94248f](https://github.com/discue/paddle-integration-mongodb/commit/b94248ffd0a70723d666fa60cca2b5422811f7bb))
* **release:** 0.3.0 ([de69d81](https://github.com/discue/paddle-integration-mongodb/commit/de69d81079c1492a12d2c7e680990149fcf9ed07))
* **release:** 0.4.0 ([c0878f1](https://github.com/discue/paddle-integration-mongodb/commit/c0878f1cb776242fc459b9d384609287cecbe411))
* **release:** 0.5.0 ([e4fb96b](https://github.com/discue/paddle-integration-mongodb/commit/e4fb96bd2331806601f983ce4e0352ae30faafac))
* **release:** 0.6.0 ([ebe76c0](https://github.com/discue/paddle-integration-mongodb/commit/ebe76c0faf36cd3178964f01502bc6701d6e6bbd))
* **release:** 0.7.0 ([9124863](https://github.com/discue/paddle-integration-mongodb/commit/91248630494206e1c585e4fb6104803a78e13666))
* **release:** 0.8.0 ([5046e4c](https://github.com/discue/paddle-integration-mongodb/commit/5046e4c58b3a447b78a374959f6e30a20f969301))
* **release:** 0.9.0 ([f16162c](https://github.com/discue/paddle-integration-mongodb/commit/f16162c3cc2aacfc40ffffd9820f7e5fd6222c20))
* remove client.js ([2f2b730](https://github.com/discue/paddle-integration-mongodb/commit/2f2b7304644f64a7c46777298037c554288fc7d6))
* remove firebase artifacts ([75424eb](https://github.com/discue/paddle-integration-mongodb/commit/75424ebef906731daea933a5bac66b113185a819))
* remove unused firebase modules ([d822895](https://github.com/discue/paddle-integration-mongodb/commit/d822895f430533fb923b4f72162d616000b53146))
* remove unused flatten component ([88e7af5](https://github.com/discue/paddle-integration-mongodb/commit/88e7af5253175265013d0cd59d176e011354bcea))
* remove unused import ([be6f57d](https://github.com/discue/paddle-integration-mongodb/commit/be6f57d2fd1f7ec8df7540ada669525f048020ed))
* remove unused imports ([c8de53d](https://github.com/discue/paddle-integration-mongodb/commit/c8de53db05d87a1bb1270d60acec4d1a2f9b52ee))
* reset version ([771ce96](https://github.com/discue/paddle-integration-mongodb/commit/771ce96c3e5b58708637aa78f938b2e75b03b86f))
* run firebase emulator before all tests ([7415561](https://github.com/discue/paddle-integration-mongodb/commit/741556183caa185ef860e4982ecce60f02247179))
* run test script ([1c87211](https://github.com/discue/paddle-integration-mongodb/commit/1c87211ef8efcbe9ba012b4ee5a65dcde140dd8b))
* run tests before releases ([7d07774](https://github.com/discue/paddle-integration-mongodb/commit/7d077747cf31a8bc1716f97ff5518726e17ea6fa))
* skip tests before release ([6ae5844](https://github.com/discue/paddle-integration-mongodb/commit/6ae5844f797997744269ee48ade9d467aa628330))
* sort list also in sub status descending ([0d07b9f](https://github.com/discue/paddle-integration-mongodb/commit/0d07b9f4040ee1e45ca7948677efc7d5bbbfc964))
* store also checkout id of cancelled events ([8b907cd](https://github.com/discue/paddle-integration-mongodb/commit/8b907cd37c0b4e5e7b561d57042fb37aa36fe09e))
* **subscription-hooks:** add resource name property ([bf33010](https://github.com/discue/paddle-integration-mongodb/commit/bf330104b687cb5b7f74bb472e5d8cfeb00d0067))
* **subscription-hydration:** do not require checkout id ([81c30b1](https://github.com/discue/paddle-integration-mongodb/commit/81c30b190f515332d942071766d6302796249885))
* **subscription-hydration:** hide private instance properties ([36130ff](https://github.com/discue/paddle-integration-mongodb/commit/36130ff2a5408db9474468d2801028ed11583b47))
* **subscription-hydration:** store sale gross and payment amount as string ([40e55f8](https://github.com/discue/paddle-integration-mongodb/commit/40e55f8313878bcea333d2a2d0d1347b91a0034a))
* **subscription-info:** add logging ([d4254c6](https://github.com/discue/paddle-integration-mongodb/commit/d4254c6762b11b4d982e5af777184d3f514ccf41))
* **subscription-info:** delete unused method ([a77b331](https://github.com/discue/paddle-integration-mongodb/commit/a77b331267fbfe6291c03419430c1f9e7589397e))
* **subscription-info:** require also hook storage instance ([af31996](https://github.com/discue/paddle-integration-mongodb/commit/af319966fb73ee894c9f7258e68c4811c99de746))
* **subscription-info:** update constructor jsdoc ([726cd7e](https://github.com/discue/paddle-integration-mongodb/commit/726cd7e57228311f7ae6eec728e413ab7422c53b))
* update module  name in logger ([19d1b1b](https://github.com/discue/paddle-integration-mongodb/commit/19d1b1ba6a5fbb72fa0c2b5b199f1a21654da98d))
* update name and reset version ([a5d364c](https://github.com/discue/paddle-integration-mongodb/commit/a5d364c520af90a41f128e89d0c94bb4ed2aaf5e))
* update package name ([678be12](https://github.com/discue/paddle-integration-mongodb/commit/678be12817bac0cd6f03041db5a4e4d91b93d6eb))
* update readme ([c3b6a2b](https://github.com/discue/paddle-integration-mongodb/commit/c3b6a2b0f11fac812ef2f4ff3f8a53b091d64921))
* update readme ([62105bb](https://github.com/discue/paddle-integration-mongodb/commit/62105bb91fdbc023274fa8b536a5a624e292ca1e))
* update release scripts ([6d62594](https://github.com/discue/paddle-integration-mongodb/commit/6d625940da2071dcdde9764e7f2a6b7166e1c0ac))
* update resource name ([f8ea29d](https://github.com/discue/paddle-integration-mongodb/commit/f8ea29dbf4c9fdc15d009ddb33090383a082feaf))
* update subscription plan ids ([a3a547e](https://github.com/discue/paddle-integration-mongodb/commit/a3a547e0c87e6c3539385f8468f415d1e55ce99b))
* update test scripts ([94ee0ef](https://github.com/discue/paddle-integration-mongodb/commit/94ee0efd5ab54973d539f211c9259b854acea42f))
* update what is logged and when ([3e62e4d](https://github.com/discue/paddle-integration-mongodb/commit/3e62e4d93333e33906496ca6f666a42de67eecda))

### [0.23.1](https://github.com/discue/paddle-integration-firestore/compare/v0.23.0...v0.23.1) (2023-02-25)


### Bug Fixes

* null pointers when using resource name starting with _ ([c209063](https://github.com/discue/paddle-integration-firestore/commit/c209063bf2158dc4c2c7ca2b3c22592fcce4a11d))

## [0.23.0](https://github.com/discue/paddle-integration-firestore/compare/v0.22.0...v0.23.0) (2023-02-25)


### Features

* allow resource name to be customized ([42ab972](https://github.com/discue/paddle-integration-firestore/commit/42ab972731a851c41e70e720e96f99f772b50317))


### Chores

* **deps-dev:** bump @playwright/test from 1.29.1 to 1.30.0 ([2b413cf](https://github.com/discue/paddle-integration-firestore/commit/2b413cfd708a3af5c2613655c05eaa1bddf9e77b))
* **deps-dev:** bump eslint from 8.31.0 to 8.33.0 ([2d69506](https://github.com/discue/paddle-integration-firestore/commit/2d6950692d4d2656dd35af52028d2eb3215d68c7))
* **deps-dev:** bump firebase-tools from 11.19.0 to 11.22.0 ([91f759d](https://github.com/discue/paddle-integration-firestore/commit/91f759dc065171137e15d4a1f5202ac35b6dbe69))
* **deps-dev:** bump puppeteer from 19.4.1 to 19.6.2 ([5f60534](https://github.com/discue/paddle-integration-firestore/commit/5f60534dd1ab4d606bb3b3f70bb1379ac1abd4ef))
* **deps:** bump firebase-admin from 11.4.1 to 11.5.0 ([dba7120](https://github.com/discue/paddle-integration-firestore/commit/dba71206818734b52b495693dec67bb2da5f4089))
* **deps:** update dependencies ([126b282](https://github.com/discue/paddle-integration-firestore/commit/126b282f752513dbf053573e32b5e467495c2d91))

## [0.22.0](https://github.com/discue/paddle-integration-firestore/compare/v0.21.0...v0.22.0) (2023-01-20)


### Features

* **subscription-info:** return update and cancel url too ([0959d5f](https://github.com/discue/paddle-integration-firestore/commit/0959d5f81de989eacfd022e2bbfbccdafca1243e))

## [0.21.0](https://github.com/discue/paddle-integration-firestore/compare/v0.20.0...v0.21.0) (2023-01-18)


### Features

* **subscription-hydration:** also store instalments and sale_gross values ([b1482c0](https://github.com/discue/paddle-integration-firestore/commit/b1482c07b9c93a69ee8ef9be79d613c52a63b369))
* **subscriptioninfo:** return more details for hydrated payments ([a13489c](https://github.com/discue/paddle-integration-firestore/commit/a13489c9cab27f4e08adc3de168d0d74d9552eee))


### Chores

* **subscription-hydration:** store sale gross and payment amount as string ([64b3a60](https://github.com/discue/paddle-integration-firestore/commit/64b3a6003a78c0e0e197d533d8afa12538112314))

## [0.20.0](https://github.com/discue/paddle-integration-firestore/compare/v0.19.0...v0.20.0) (2023-01-08)


### Features

* **subscription-hydration:** require plan id instead of subscription id param ([9e2f32a](https://github.com/discue/paddle-integration-firestore/commit/9e2f32af33666606e993a4e53d3a40f057d25b0d))
* **subscription-info:** add find subscription id method ([a6db41e](https://github.com/discue/paddle-integration-firestore/commit/a6db41e8a96a0aa9b9e12ea223072f8446b3e85d))


### Refactorings

* **subscription-hooks:** do not flatten objects ([d7d5bac](https://github.com/discue/paddle-integration-firestore/commit/d7d5bac09cbdb5c4d2d7d2cacd64a5ff810430a9))
* **subscription-hooks:** return promise instead of waiting it ([95be565](https://github.com/discue/paddle-integration-firestore/commit/95be565eda4c1e4dacabc41067323d9c29374186))


### Chores

* remove unused flatten component ([6ace030](https://github.com/discue/paddle-integration-firestore/commit/6ace0304c6840310d97f1b8e694555c10d60fc2e))
* **subscription-hooks:** add resource name property ([4b39dd4](https://github.com/discue/paddle-integration-firestore/commit/4b39dd47d60c63ca87fe5dbc583aebac49d72cd6))
* **subscription-hydration:** hide private instance properties ([b39c13d](https://github.com/discue/paddle-integration-firestore/commit/b39c13dc90f8d455e7c11a83dea66d1938e07b51))
* **subscription-info:** update constructor jsdoc ([e466977](https://github.com/discue/paddle-integration-firestore/commit/e4669776bbf233e0f464ded887a3e972695895e1))

## [0.19.0](https://github.com/discue/paddle-integration-firestore/compare/v0.18.0...v0.19.0) (2023-01-07)


### Features

* **api:** add get subscription payments method ([8e7a294](https://github.com/discue/paddle-integration-firestore/commit/8e7a2944e96fd4d3170a7509c21bec117a77f8a3))
* **subscription-hydration:** also hydrate payments ([c6c254c](https://github.com/discue/paddle-integration-firestore/commit/c6c254cffc933fb706288e0cb6e44904dc992096))
* **subscription-hydration:** check if plan already active ([fd4ed5d](https://github.com/discue/paddle-integration-firestore/commit/fd4ed5d9f945c37a19cedc05dbfa130d8d765a4f))
* **subscription-hydration:** set effective cancellation date based on last payment ([85cfd3b](https://github.com/discue/paddle-integration-firestore/commit/85cfd3bd19b3aa7b9ff20705c1d26638d4640b72))


### Bug Fixes

* **html-encoder:** do not encode value false ([5ad8987](https://github.com/discue/paddle-integration-firestore/commit/5ad8987ca279d816995b23d4d9fc40800c1e4488))


### Refactorings

* promote subscription hydration to own component ([9d3436b](https://github.com/discue/paddle-integration-firestore/commit/9d3436b8a8662c8d4d98ecb23222c03cec782688))
* use singular for main component exports ([2ccd3c9](https://github.com/discue/paddle-integration-firestore/commit/2ccd3c9b968ea5f4a6d579a41dc71d5c1fa47f9b))


### Chores

* add order details callback ([e9de247](https://github.com/discue/paddle-integration-firestore/commit/e9de2474875b48f810afdefabb11bf53052a6cdc))
* **subscription-hydration:** do not require checkout id ([50baca2](https://github.com/discue/paddle-integration-firestore/commit/50baca2f24562ab7b8d97ed4cab8798cee0c7e14))

## [0.18.0](https://github.com/discue/paddle-integration-firestore/compare/v0.17.0...v0.18.0) (2023-01-03)


### Features

* **api:** add get plan by id method ([a700319](https://github.com/discue/paddle-integration-firestore/commit/a70031941027a96f5119e17a84d793e7b9a820d2))
* **middleware:** emit events after successful hook processing ([4764578](https://github.com/discue/paddle-integration-firestore/commit/4764578905776f33637f9462cae91578d217068d))
* **subscription-info:** expect object or resource ids ([4df224b](https://github.com/discue/paddle-integration-firestore/commit/4df224bfe2b50418753cdccd8726cbf64a331f3f))


### Bug Fixes

* **subscription-info:** return subscription and not parent object ([f184ad7](https://github.com/discue/paddle-integration-firestore/commit/f184ad708b0afae399f17b89e3554c9966c32c0f))


### Chores

* **deps-dev:** bump eslint from 8.30.0 to 8.31.0 ([8750ddf](https://github.com/discue/paddle-integration-firestore/commit/8750ddfd04db771fa37289ed2c6cc3137de8fa5b))
* **deps:** bump actions/stale from 6 to 7 ([f89f55b](https://github.com/discue/paddle-integration-firestore/commit/f89f55b7f8421afe1ae8b592dbf7f85a62ad2f61))
* **deps:** update dependencies ([523ca9e](https://github.com/discue/paddle-integration-firestore/commit/523ca9ed2c505e27faf18d1ce850a728864aa39f))
* do not source hidden env file ([891c5e0](https://github.com/discue/paddle-integration-firestore/commit/891c5e05121c292f8cf33e5dbcb903272ccab342))
* **firebase:** prevent port collisions ([e49452a](https://github.com/discue/paddle-integration-firestore/commit/e49452a22dbf997db50a81dd75504deed31e3658))
* fix type on description ([fc6132d](https://github.com/discue/paddle-integration-firestore/commit/fc6132d8495435b185f8fb00bf6e61c7cbeeb436))

## [0.17.0](https://github.com/discue/paddle-integration-firestore/compare/v0.16.0...v0.17.0) (2022-12-24)


### Features

* add jsdoc to main export to enable typings ([2143b3c](https://github.com/discue/paddle-integration-firestore/commit/2143b3c76536682860b2255fd5c44940f179a95a))


### Chores

* update module  name in logger ([3c6df94](https://github.com/discue/paddle-integration-firestore/commit/3c6df9406aeddc820eaf30cae66f8e7b8e8b62b1))

## [0.16.0](https://github.com/discue/paddle-integration-firestore/compare/v0.15.1...v0.16.0) (2022-12-10)


### Features

* allow logging of outgoing requests ([4f4bde3](https://github.com/discue/paddle-integration-firestore/commit/4f4bde312377b91cf9d5903bb56d0ff6b7142182))


### Bug Fixes

* **middleware:** handle of failed and refunded payments ([9045cf0](https://github.com/discue/paddle-integration-firestore/commit/9045cf058daca17eedb7f62cff4ddbc5191bcfc4))


### Chores

* add simple logger ([3dc4b94](https://github.com/discue/paddle-integration-firestore/commit/3dc4b94195643594650f4f3fdac9c2bc8bd933cd))
* **deps-dev:** bump @playwright/test from 1.28.0 to 1.28.1 ([83fb530](https://github.com/discue/paddle-integration-firestore/commit/83fb53086f7bab2410a0214c46742cd071831300))
* **deps-dev:** bump chai from 4.3.6 to 4.3.7 ([8dd28d7](https://github.com/discue/paddle-integration-firestore/commit/8dd28d74fafec85510efa6093d5eaaa1cba4475a))
* **deps-dev:** bump express from 4.18.1 to 4.18.2 ([548740f](https://github.com/discue/paddle-integration-firestore/commit/548740f003d31f284fb4abb11efd144e5b028748))
* **deps-dev:** bump mocha from 10.0.0 to 10.1.0 ([bf95f5b](https://github.com/discue/paddle-integration-firestore/commit/bf95f5b4eeb22558d9bd25ea40f262ade843c754))
* **deps:** bump firebase-admin from 11.2.0 to 11.3.0 ([4b83bfa](https://github.com/discue/paddle-integration-firestore/commit/4b83bfa50a2332a01de610ec4465b4b766e245ec))

### [0.15.1](https://github.com/discue/paddle-integration-firestore/compare/v0.15.0...v0.15.1) (2022-11-27)


### Bug Fixes

* module exports ([e7eb82c](https://github.com/discue/paddle-integration-firestore/commit/e7eb82c7faee28350acd24ed450abd52abbfec64))

## [0.15.0](https://github.com/discue/paddle-integration-firestore/compare/v0.14.0...v0.15.0) (2022-11-27)


### Features

* add client function to create customData objects ([66abf90](https://github.com/discue/paddle-integration-firestore/commit/66abf9042d0d8a685b192b45bf3f93c61e64ff14))
* **api:** add get order method ([8055f97](https://github.com/discue/paddle-integration-firestore/commit/8055f971161f3d8464c90763c5218ccf5eb4e061))
* extract ids from namespaced object ([77542b8](https://github.com/discue/paddle-integration-firestore/commit/77542b8088344f1ae4e39a6f15739ef95bfcb786))
* **subscription-info:** use custom data to verify api client ([4ca8117](https://github.com/discue/paddle-integration-firestore/commit/4ca81173de24563de395e0b3003131dea01b9351))


### Refactorings

* **api:** add api version to path elements ([344a0fa](https://github.com/discue/paddle-integration-firestore/commit/344a0fa0433a6f8af4c0e4fa8b0319ce7997c2a8))
* **api:** create base urls for vendor and checkout api ([a7ad551](https://github.com/discue/paddle-integration-firestore/commit/a7ad551fa8feeb2c59fe43f90a4ffaeededccf54))


### Chores

* **error-handler:** during tests always return 200 ([ac64039](https://github.com/discue/paddle-integration-firestore/commit/ac64039b3c635c13a19c89189642ac16f44ca492))
* **subscription-info:** add logging ([69c7c01](https://github.com/discue/paddle-integration-firestore/commit/69c7c01e6a26e7cd05dc84f36af1ba369be52d73))
* **subscription-info:** delete unused method ([ae2b96b](https://github.com/discue/paddle-integration-firestore/commit/ae2b96b806975bb838b252e279e074d99f23cb0b))

## [0.14.0](https://github.com/discue/paddle-integration-firestore/compare/v0.13.0...v0.14.0) (2022-11-19)


### Features

* **api:** ensure api is always initialized before first request ([de0344c](https://github.com/discue/paddle-integration-firestore/commit/de0344cd33766270adf0ceaee0973564fbc103aa))

## [0.13.0](https://github.com/discue/paddle-integration-firestore/compare/v0.12.0...v0.13.0) (2022-11-17)


### Features

* **api:** add get single subscription method ([606d247](https://github.com/discue/paddle-integration-firestore/commit/606d2471a42f96e27f11a99a368101de3a93be02))
* handle errors in middleware gracefully ([7adeaa2](https://github.com/discue/paddle-integration-firestore/commit/7adeaa2481776a58df5653253c19cd706b527674))
* **subscription-info:** allow hydration of local status ([48aa964](https://github.com/discue/paddle-integration-firestore/commit/48aa9648c0dd58eaee4d2fe3362829972a6b0136))
* **subscription-info:** check whether sub was already hydrated ([dbb2df2](https://github.com/discue/paddle-integration-firestore/commit/dbb2df224fe89a6151f68226720b44debb7fcd30))


### Bug Fixes

* cannot import without es6 ([7700a88](https://github.com/discue/paddle-integration-firestore/commit/7700a88621850f1529ffcccd1672749ba6dd14a5))


### Refactorings

* rename sub not found variable ([6cb69f8](https://github.com/discue/paddle-integration-firestore/commit/6cb69f8e7649b2d5591ae7eedaeaec1ec6e5d534))


### Chores

* add missing whitespace ([7ff0354](https://github.com/discue/paddle-integration-firestore/commit/7ff0354850101bd110cb6f8144f96f8e8b66362e))
* add payloads of client events ([3d069ab](https://github.com/discue/paddle-integration-firestore/commit/3d069abb386175f426e099253b52861c0af4d8c9))
* also kill hook server if necessary ([d796a2f](https://github.com/discue/paddle-integration-firestore/commit/d796a2fc991d08efa78f523920034477b77a7f94))
* **ci:** increase test timeout ([cb9aff0](https://github.com/discue/paddle-integration-firestore/commit/cb9aff081e4d3ca774b71c60bf79234b33b68f21))
* **ci:** use node 16 ([2607bac](https://github.com/discue/paddle-integration-firestore/commit/2607bac46189e8fecb34976716d85ebdccbf56db))
* **deps-dev:** bump eslint from 8.24.0 to 8.26.0 ([f1e1f01](https://github.com/discue/paddle-integration-firestore/commit/f1e1f013414103a8a090f9d2ae95a71a551be8ac))
* **deps-dev:** bump nodemon from 2.0.19 to 2.0.20 ([9b9cfa4](https://github.com/discue/paddle-integration-firestore/commit/9b9cfa46f43113de58ff0ab74fc2e65ccc9ce277))
* **deps-dev:** bump puppeteer from 18.0.5 to 19.2.0 ([f6f215e](https://github.com/discue/paddle-integration-firestore/commit/f6f215ed54e1b9bbe7882f90b85fb4a4172765eb))
* **deps:** bump firebase-admin from 11.0.1 to 11.2.0 ([5d2617f](https://github.com/discue/paddle-integration-firestore/commit/5d2617fcd1d2e1284270e26d3c1d9f9c995027d5))
* **deps:** bump got from 12.5.1 to 12.5.2 ([0f6a15d](https://github.com/discue/paddle-integration-firestore/commit/0f6a15d639e90d632a78c508ba0da0930f328903))
* **deps:** update dependencies ([8d1a9aa](https://github.com/discue/paddle-integration-firestore/commit/8d1a9aa078a8c2ea1619932a42dd19cfcca6d507))
* **hooks:** do not store unit_price ([c5441d5](https://github.com/discue/paddle-integration-firestore/commit/c5441d5a1fa9c62fb9aff661a39530c13756116e))
* log binary and args when starting and stopping ([9566c48](https://github.com/discue/paddle-integration-firestore/commit/9566c4822723cf95665ff40e6f1af240430364df))
* on ci/cd envs return 202 even if not found ([992064e](https://github.com/discue/paddle-integration-firestore/commit/992064e48d5104ee4983182620b6f3e2825f3ff7))
* store also checkout id of cancelled events ([55c88b6](https://github.com/discue/paddle-integration-firestore/commit/55c88b61c6a6349c0d9164f3c47111c9e5bfee60))
* **subscription-info:** require also hook storage instance ([86081b1](https://github.com/discue/paddle-integration-firestore/commit/86081b1b2284162db6475acd6acfee92818fdafd))

## [0.12.0](https://github.com/discue/paddle-integration-firestore/compare/v0.11.0...v0.12.0) (2022-10-13)


### Features

* **api:** add list plans method ([0dcb855](https://github.com/discue/paddle-integration-firestore/commit/0dcb855c12d75469f3ca2d252e03a06683e205bf))
* **api:** add list products method ([03f3327](https://github.com/discue/paddle-integration-firestore/commit/03f33278e641b86ad1b990b397bfb634fd22349c))
* **api:** allow pagination and fetching all subs ([23c4432](https://github.com/discue/paddle-integration-firestore/commit/23c44329709fa69b5fa6577fa8093b2a58b9e655))
* **api:** enable customization of http params ([9780123](https://github.com/discue/paddle-integration-firestore/commit/9780123a1188d9209bfc523b1d941488e575a45b))
* export api constructor too ([7fa7dbe](https://github.com/discue/paddle-integration-firestore/commit/7fa7dbe7afb8470d5d85975bcff03a8fc0f0d26e))


### Chores

* skip tests before release ([3cf108b](https://github.com/discue/paddle-integration-firestore/commit/3cf108bd227c2ece2006cf146812cfa4c774bbf4))

## [0.11.0](https://github.com/discue/paddle-integration-firestore/compare/v0.10.1...v0.11.0) (2022-10-12)


### Features

* **api:** import got only once ([542e40b](https://github.com/discue/paddle-integration-firestore/commit/542e40b1671a9910bfe46fde9e989a253c691c78))
* **subscription-info:** add cancel subscription method ([09656f0](https://github.com/discue/paddle-integration-firestore/commit/09656f04c1f9f48272a700b0000dc11194420f74))
* **subscription-info:** add update subscription plan method ([e19306b](https://github.com/discue/paddle-integration-firestore/commit/e19306b0f353fe32786c0db9fae1e8912b9efdce))
* **subscription-info:** catch and log api errors ([7fa6791](https://github.com/discue/paddle-integration-firestore/commit/7fa67911f46c8be0291c3a6ce44a52cda93d952e))


### Refactorings

* extract get subscription plan id to separate method ([3dc38bf](https://github.com/discue/paddle-integration-firestore/commit/3dc38bf0f3fc1fdfde31ef73d9a9e6626ac5c056))


### Chores

* add jsdoc description to cancel subscription method ([c03b6a8](https://github.com/discue/paddle-integration-firestore/commit/c03b6a8d8f3af5612562181bdfb7c7c8c06560a7))
* update readme ([1fa863e](https://github.com/discue/paddle-integration-firestore/commit/1fa863ee530f4dfcc21139572c1e8aabae88f0c5))

### [0.10.1](https://github.com/discue/paddle-integration-firestore/compare/v0.10.0...v0.10.1) (2022-10-09)


### Bug Fixes

* timestamp not passed to get stard and end dates ([9481284](https://github.com/discue/paddle-integration-firestore/commit/948128446266932959c0b17f835072e0b7ff25d6))

## [0.10.0](https://github.com/discue/paddle-integration-firestore/compare/v0.9.0...v0.10.0) (2022-10-09)


### Features

* return future subscription info too ([68a6b04](https://github.com/discue/paddle-integration-firestore/commit/68a6b04fb58d9c4e36dbe4573b9c2744c62dc0c4))

## [0.9.0](https://github.com/discue/paddle-integration-firestore/compare/v0.8.0...v0.9.0) (2022-10-02)


### Features

* do not add upcoming payment if sub expires before ([92f0661](https://github.com/discue/paddle-integration-firestore/commit/92f066180e6419661dc93652214a6a70ce8ab1b5))


### Bug Fixes

* check if payments exists before accessing one of them ([4e6739f](https://github.com/discue/paddle-integration-firestore/commit/4e6739fb1476db820f1e95307f203349542a6c71))


### Chores

* **ci:** run only one job in parallel ([931145a](https://github.com/discue/paddle-integration-firestore/commit/931145a0839b4b3b47a8a98e8be3495e97b6b6f6))
* **deps-dev:** bump @playwright/test from 1.25.1 to 1.26.1 ([a6a914f](https://github.com/discue/paddle-integration-firestore/commit/a6a914f84ed657f4784e5badaca27f8c5f9a7f6d))
* **deps-dev:** bump eslint from 8.23.0 to 8.24.0 ([e29f1c8](https://github.com/discue/paddle-integration-firestore/commit/e29f1c8517b78305ccd36ec39bb4021db83bb6c5))
* **deps-dev:** bump firebase-tools from 11.8.0 to 11.13.0 ([6c5e286](https://github.com/discue/paddle-integration-firestore/commit/6c5e286030e58af581c6646ae2b44380092082b0))
* **deps-dev:** bump puppeteer from 17.0.0 to 18.0.5 ([765f918](https://github.com/discue/paddle-integration-firestore/commit/765f91843c4d4d5c8028c085ff3d5db73a87a132))
* **deps:** bump actions/stale from 5 to 6 ([5eddd24](https://github.com/discue/paddle-integration-firestore/commit/5eddd241ad2e2feaee3015f684144e24f98ce2d4))
* **deps:** bump got from 12.4.1 to 12.5.1 ([5f6e29f](https://github.com/discue/paddle-integration-firestore/commit/5f6e29fcfdca7d0cbc2ee82cad0c26277a21381b))

## [0.8.0](https://github.com/discue/paddle-integration-firestore/compare/v0.7.0...v0.8.0) (2022-09-30)


### Features

* implement get subscription info method ([f061e6a](https://github.com/discue/paddle-integration-firestore/commit/f061e6abeb2bc40a9ea0e2c83b79ead79e0bde9c))


### Refactorings

* move subscription hooks handling to own component ([e29ecb9](https://github.com/discue/paddle-integration-firestore/commit/e29ecb92d7017ea44394455ef137de1035eb0569))
* rename private method name ([38a7281](https://github.com/discue/paddle-integration-firestore/commit/38a72810976eca72cafbfde3c22bd4d66dc9f86a))
* split hook handling and subscription info components ([5adb158](https://github.com/discue/paddle-integration-firestore/commit/5adb158af794ab70a41ba5c036d27368119bb165))


### Chores

* remove client.js ([c007ca8](https://github.com/discue/paddle-integration-firestore/commit/c007ca8f9b6d40887c6fb228f6030d2c7bf0e124))

## [0.7.0](https://github.com/discue/paddle-integration-firestore/compare/v0.6.0...v0.7.0) (2022-09-27)


### Features

* sort payments trail descending ([24e5ce3](https://github.com/discue/paddle-integration-firestore/commit/24e5ce3c0fc49961311775f7d9e63bb384f55c82))
* sort status trail also descending ([54f9128](https://github.com/discue/paddle-integration-firestore/commit/54f9128f0ed6f441bf0a2a953a68ca2a9072f4c2))


### Chores

* sort list also in sub status descending ([f886837](https://github.com/discue/paddle-integration-firestore/commit/f88683770ac1529409a030819651b266102d24e8))
* update release scripts ([c7b3094](https://github.com/discue/paddle-integration-firestore/commit/c7b3094f633116581e11743b8a4dcbedefabe284))

## [0.6.0](https://github.com/discue/paddle-integration-firestore/compare/v0.5.0...v0.6.0) (2022-09-27)


### Features

* add upcoming payment also to payments trail ([45e746d](https://github.com/discue/paddle-integration-firestore/commit/45e746dbb2012c382cea80e2119e67245d95d033))
* **api:** add refund payment method ([3a7d4eb](https://github.com/discue/paddle-integration-firestore/commit/3a7d4ebab2d93731d2bcd53b6e21792545d8be47))
* html encode also all subscription events ([953bc16](https://github.com/discue/paddle-integration-firestore/commit/953bc164b32a3a7a9e084abf8961221fb9151c27))


### Chores

* add prefix to pre checkout placeholder ([11bd7c8](https://github.com/discue/paddle-integration-firestore/commit/11bd7c89e509cac3f51dff09ad7af6575753f867))
* **ci:** install playwright deps before e2e tests ([97b8a7a](https://github.com/discue/paddle-integration-firestore/commit/97b8a7a0936a1fabd2b0c64f6baee5f12afb9f2a))
* **deps:** remove dependency to playwright-core ([be28b9a](https://github.com/discue/paddle-integration-firestore/commit/be28b9a69550b2df37238d9cdbd3771a036ff40e))
* do not reassign result ([b89a13c](https://github.com/discue/paddle-integration-firestore/commit/b89a13c39d3a68dbc06f8e1f64e61250fcb854f9))
* handle unknown events gracefully ([a8f1c24](https://github.com/discue/paddle-integration-firestore/commit/a8f1c2466140c9cc68ec785ebb3ff54ae32e2adb))
* prevent duplicate code when handling payments ([0709909](https://github.com/discue/paddle-integration-firestore/commit/070990987cb508a5de8cb6328f357c124dabbfe5))
* update resource name ([c98bc6b](https://github.com/discue/paddle-integration-firestore/commit/c98bc6b610b822b04473fb5e3919e7fc5c0e17ee))

## [0.5.0](https://github.com/discue/paddle-integration-firestore/compare/v0.4.0...v0.5.0) (2022-09-14)


### Features

* after sub updated deactivate prev sub ([9e301d3](https://github.com/discue/paddle-integration-firestore/commit/9e301d3063fa2e86b0d668e0bdd4ca50903b754c))
* **api:** add service for paddle subscriptions api ([f6fc40d](https://github.com/discue/paddle-integration-firestore/commit/f6fc40dfd409dbd370cbcc50cfc3a78c8efc87bc))


### Refactorings

* rename local variable ([a218168](https://github.com/discue/paddle-integration-firestore/commit/a218168791f1b3af810caac67554fe927816d7a1))


### Chores

* allow 10s clockdrift checking sub activeness ([ba9ab0e](https://github.com/discue/paddle-integration-firestore/commit/ba9ab0e131ca781f6b45df1c673b9e3b0dbb18c5))
* also store subscription id for cancellation events ([596b85e](https://github.com/discue/paddle-integration-firestore/commit/596b85e2dcd0db545c2a961f7113167e94911bba))
* **ci:** add secrets to e2e test environment ([243cb51](https://github.com/discue/paddle-integration-firestore/commit/243cb5133e6db00f853fbe6ee8c1d02d738efdfa))
* decrease logging ([ad75551](https://github.com/discue/paddle-integration-firestore/commit/ad7555140ea08e966406304483df94c0c2cbbcd3))
* **deps:** install got ([629fd9c](https://github.com/discue/paddle-integration-firestore/commit/629fd9c2203b120ac0a0bbf3f2bcd98439eee640))
* make git ignore .env.local files ([b43eebc](https://github.com/discue/paddle-integration-firestore/commit/b43eebc26caecb788bfbdbb11dd39670bd6d7b79))
* update what is logged and when ([a877918](https://github.com/discue/paddle-integration-firestore/commit/a877918b4bb837e7033ba82d4e4c4b158b476bc5))

## [0.4.0](https://github.com/discue/paddle-integration-firestore/compare/v0.3.0...v0.4.0) (2022-09-11)


### Features

* add get start and end date method ([db8e775](https://github.com/discue/paddle-integration-firestore/commit/db8e7752045c9e3ae8192b8655adaa9e3d22d0d1))
* add method to compile payments list ([93b2704](https://github.com/discue/paddle-integration-firestore/commit/93b270429fbfbbc8b0845c6885414271a1ffa559))
* add method to compile status trail ([7dfe368](https://github.com/discue/paddle-integration-firestore/commit/7dfe368046cf4874bfa12849daf733b19b4b52d9))
* calculate subscription status per subscription plan id ([f0e02bd](https://github.com/discue/paddle-integration-firestore/commit/f0e02bdce1728a4c63c561ec6f64a7f66c1c65a3))
* return payment trail per sub plan id ([bc4c0bd](https://github.com/discue/paddle-integration-firestore/commit/bc4c0bd6f6f59c300e4516e4c1a7766f21e6b349))
* return start/end date per sub plan id ([9a217a9](https://github.com/discue/paddle-integration-firestore/commit/9a217a94caf792c3578fcd0150824b562962d3ad))
* return status trail per sub plan id ([9f1444b](https://github.com/discue/paddle-integration-firestore/commit/9f1444bd45074bb989ed395673ea324a7fc156bb))


### Refactorings

* use event_time instead of start_time for status ([b2fc819](https://github.com/discue/paddle-integration-firestore/commit/b2fc819756aca06ba1a99d6c7e78ffa19259b21c))
* use event_time instead of start_time for status ([bb107dc](https://github.com/discue/paddle-integration-firestore/commit/bb107dc09c97ca5f66ff57e64538e0d8ea800efc))


### Chores

* add start date for placeholder ([54d837f](https://github.com/discue/paddle-integration-firestore/commit/54d837fd3dbdf65a42fb19ce1f6d8f257c4a8688))
* do not store signature with payments ([e697625](https://github.com/discue/paddle-integration-firestore/commit/e69762523585d03fbf215ab3afef9a6820e5ae66))
* **docs:** add jsdoc to all functions ([1596d8c](https://github.com/discue/paddle-integration-firestore/commit/1596d8cf44a4de185e33514f2b32ce32b3de51d2))
* **docs:** add jsdoc types ([609ba17](https://github.com/discue/paddle-integration-firestore/commit/609ba17bbb35464e1b74c253e3b82724eb7501d7))
* **docs:** update readme ([8fbb40a](https://github.com/discue/paddle-integration-firestore/commit/8fbb40ac5dccad393d2bbbd4fd59c751114ab457))

## [0.3.0](https://github.com/discue/paddle-integration-firestore/compare/v0.2.0...v0.3.0) (2022-09-08)


### Features

* dont store subscription in subcollection ([6ff74fb](https://github.com/discue/paddle-integration-firestore/commit/6ff74fb777f12473e6cf395b6579cfd7019581fb))


### Refactorings

* rename all status methods ([1dfe541](https://github.com/discue/paddle-integration-firestore/commit/1dfe54163471b7138289923594196a32a76a0d51))


### Chores

* **docs:** update readme ([6afe36d](https://github.com/discue/paddle-integration-firestore/commit/6afe36d506d7deea85bac7c9fcecc07101d82b87))
* make sure test scripts actually run ([591a7a1](https://github.com/discue/paddle-integration-firestore/commit/591a7a158f4011af31aad8595ed76417c26b95f0))
* run tests before releases ([43b7821](https://github.com/discue/paddle-integration-firestore/commit/43b7821cabcaee0d3fae9add68a25f08c0f180e5))

## [0.2.0](https://github.com/discue/paddle-integration-firestore/compare/v0.1.0...v0.2.0) (2022-09-04)


### Features

* add actual server middleware ([62ebb98](https://github.com/discue/paddle-integration-firestore/commit/62ebb981477ca9c71ee2d8c5af7b0888670a0470))
* add body parser module ([c46543f](https://github.com/discue/paddle-integration-firestore/commit/c46543feb0b35ff23a819cd0879b822bc5d80f27))
* add html encoder ([d4cd798](https://github.com/discue/paddle-integration-firestore/commit/d4cd798126c2b917b98489d865314d50a36a1a5a))
* add methods for payments hooks ([6eeb570](https://github.com/discue/paddle-integration-firestore/commit/6eeb57066ce4e9cc831d788e0f010e6629f90832))
* allow subs to be stored in nested collections ([cb76db8](https://github.com/discue/paddle-integration-firestore/commit/cb76db8674e53b9d908d6a929f577a3f9cecbda6))
* allow to calc sub state in the future ([76012fe](https://github.com/discue/paddle-integration-firestore/commit/76012febd326c9bf4ac9f466006b745ecbea0405))
* also store alert id and name in status models ([0f0c913](https://github.com/discue/paddle-integration-firestore/commit/0f0c913e353b216850473166df45aefac249015f))
* implement create, update and cancel subscription ([bbb716b](https://github.com/discue/paddle-integration-firestore/commit/bbb716bd24c6a7caab6330bd69b3eafb6659f394))
* throw errors if arguments are falsy ([8ef9797](https://github.com/discue/paddle-integration-firestore/commit/8ef979783d7b1049a9bbfd34e1371b539f4df376))
* update module exports ([c6908ef](https://github.com/discue/paddle-integration-firestore/commit/c6908ef582c4fa75c11f827dcbc1afcc1bed2e39))


### Bug Fixes

* payments overwritten by subscription hooks ([f8a5682](https://github.com/discue/paddle-integration-firestore/commit/f8a5682dc2229b5b9a723d0906306add762f7dd7))
* start_at property not used in condition ([6999310](https://github.com/discue/paddle-integration-firestore/commit/69993101daa369df28ebd82d05677ef6dc619514))
* used wrong quantity property name ([aafae89](https://github.com/discue/paddle-integration-firestore/commit/aafae8947a3886ad15d73a96488bd457c5c3d1cc))


### Refactorings

* add comments and extract to smaller methods ([8f22288](https://github.com/discue/paddle-integration-firestore/commit/8f222885a23e0a108e693c67e5c45fc756926681))
* prepare usage of nested firestore resource ([422f5f7](https://github.com/discue/paddle-integration-firestore/commit/422f5f7cc9f61e402e2453f076c3f4ae7a1f1e4f))


### Chores

* add and update bash scripts ([6c6e030](https://github.com/discue/paddle-integration-firestore/commit/6c6e030e7c28d4f3b7e617810f0b52ee628b36e6))
* add firestore functions ([0d41cc2](https://github.com/discue/paddle-integration-firestore/commit/0d41cc2177d2997dbada889fc54b7199305aa893))
* add hook server ([f0d7416](https://github.com/discue/paddle-integration-firestore/commit/f0d7416b8e8bc57339830485ca97aeffa96b2543))
* add local firebase emulator config ([25eaf32](https://github.com/discue/paddle-integration-firestore/commit/25eaf325853530dda6f6b05934361417e35f054f))
* add test script ([5308880](https://github.com/discue/paddle-integration-firestore/commit/53088801ca8d383f79c333e7dfb1e06606254f10))
* allow node globals ([bfebb3b](https://github.com/discue/paddle-integration-firestore/commit/bfebb3b8e1a336702eadf97c511b4bcc0f5a8084))
* **ci:** run also e2e tests ([269955d](https://github.com/discue/paddle-integration-firestore/commit/269955dfee61119495514e62ffebde6383b2af93))
* **deps-dev:** bump puppeteer from 16.2.0 to 17.0.0 ([638874c](https://github.com/discue/paddle-integration-firestore/commit/638874c2a1301bed3ed780b43cb77bdfb60723f0))
* **deps:** install e2e test dependencies ([4dcd2ac](https://github.com/discue/paddle-integration-firestore/commit/4dcd2ac08136865ee129083c08f4d3ecb3e93278))
* **deps:** install html entities ([fea9bb4](https://github.com/discue/paddle-integration-firestore/commit/fea9bb40d83c1f23cd91d9f5f673878ef7e3f206))
* **deps:** make firebase tools a dev dep ([510a0d3](https://github.com/discue/paddle-integration-firestore/commit/510a0d36d96b77e6d57e83f4b43c929b38ac1111))
* **deps:** update dependencies ([c19c04a](https://github.com/discue/paddle-integration-firestore/commit/c19c04a95939cbc9083e4e96afd1df8b4280b4fd))
* do not encode payments twice ([d364979](https://github.com/discue/paddle-integration-firestore/commit/d3649799bd14c7f5f2f8bfda25816fadf66a93cd))
* **docs:** update readme ([af94536](https://github.com/discue/paddle-integration-firestore/commit/af945369c4a99f04ca65a9e4400a9e7a757cd3b3))
* remove unused import ([7d17ca0](https://github.com/discue/paddle-integration-firestore/commit/7d17ca0de886ff766c82862c443704749f8ca232))
* remove unused imports ([91e5ed4](https://github.com/discue/paddle-integration-firestore/commit/91e5ed42604a9c8c55a95dad57f63651f8b3e7fc))
* run firebase emulator before all tests ([7415561](https://github.com/discue/paddle-integration-firestore/commit/741556183caa185ef860e4982ecce60f02247179))
* run test script ([1c87211](https://github.com/discue/paddle-integration-firestore/commit/1c87211ef8efcbe9ba012b4ee5a65dcde140dd8b))
* update test scripts ([982e078](https://github.com/discue/paddle-integration-firestore/commit/982e0780a3a2d71c3b4a72d9e0ccd9d67088c187))

## 0.1.0 (2022-08-21)


### Chores

* add changelog generation script ([42759dd](https://github.com/discue/paddle-integration-firestore/commit/42759dd60bd79ca24380e662d3dc62fb0a72ef03))
* add eslintrc ([61933ce](https://github.com/discue/paddle-integration-firestore/commit/61933cea448eb9a356d5b26a4ce3027f2c925058))
* add github workflows ([44c9b58](https://github.com/discue/paddle-integration-firestore/commit/44c9b58f08da2608fc91afa58a28985311b1ba68))
* add gitignore ([215f66d](https://github.com/discue/paddle-integration-firestore/commit/215f66da581064152b610530c1df9904676c26ec))
* add license ([88ce510](https://github.com/discue/paddle-integration-firestore/commit/88ce5106f5bc50542e5ad3aa8694bc7d9883f452))
* add package files ([4a28dfc](https://github.com/discue/paddle-integration-firestore/commit/4a28dfc3dfa24cce1dae0ad75e27e8f30e78f30c))
* add standard version config ([7191a2b](https://github.com/discue/paddle-integration-firestore/commit/7191a2b3e3347bc6a1a35882f893bafe9c5ffe35))
