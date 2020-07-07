import 'es6-promise/auto';
import * as SDK from 'azure-devops-extension-sdk';
import {
  CommonServiceIds,
  getClient,
  IHostPageLayoutService,
} from 'azure-devops-extension-api';
import {
  BuildDefinition,
  BuildRestClient,
} from 'azure-devops-extension-api/Build';

SDK.register('sample-build-menu', () => {
  return {
    execute: async (context: BuildDefinition) => {
      console.log(context);
      const dialogSvc = await SDK.getService<IHostPageLayoutService>(
        CommonServiceIds.HostPageLayoutService
      );
      console.log(BuildRestClient);
      console.log(dialogSvc);
      let x = SDK.getExtensionContext().id;
      console.log(x);
      let handleclick = dialogSvc.openMessageDialog(
        `Fetched build definition ${'result.name'}. Latest build: ${JSON.stringify(
          11231231211222
        )}`,
        {
          showCancel: true,
          okText: '关掉我!',
          onClose: function () {
            console.log(123);
          },
        }
      );
      // dialogSvc.openCustomDialog<boolean | undefined>(
      //   SDK.getExtensionContext().id + '.panel-content',
      //   {
      //     title: 'Custom dialog',
      //     configuration: {
      //       message: 'Use compact pivots?',
      //       initialValue: '33333',
      //       size: 300,
      //     },
      //     onClose: (result) => {
      //       alert(result);
      //     },
      //   }
      // );
    },
  };
});

SDK.init();
