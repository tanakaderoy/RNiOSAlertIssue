const fs = require('fs');

const applyFixForRCTAlertController = () => {
  try {
    const path =
      './node_modules/react-native/React/CoreModules/RCTAlertController.m';
    console.log('Checking file ....\n' + path);
    const data = fs.readFileSync(path, 'utf-8');
    if (data.includes('if (@available(iOS 13.0, *)) {')) {
      console.log('Breaking Early: Already Ran');
      return;
    }
    const replacement = `if (@available(iOS 13.0, *)) {
        for (UIWindowScene *scene in UIApplication.sharedApplication.connectedScenes) {
            if(scene.activationState == UISceneActivationStateForegroundActive && scene.class == UIWindowScene.class){
                _alertWindow = [[UIWindow alloc] initWithWindowScene:scene];
                break;
              }else {
                  _alertWindow = [[UIWindow alloc] initWithFrame:RCTSharedApplication().keyWindow.bounds];
              } 
            }
    }else{
        _alertWindow = [[UIWindow alloc] initWithFrame:RCTSharedApplication().keyWindow.bounds];
    }`;
    const regex = /_alertWindow = \[\[UIWindow alloc\] initWithFrame:RCTSharedApplication\(\)\.keyWindow\.bounds];/gm;
    const result = data.replace(regex, replacement);

    console.log('\n');
    fs.writeFileSync(path, result);
    console.log('Done!');
  } catch (err) {
    console.error(err);
  }
};

applyFixForRCTAlertController();
