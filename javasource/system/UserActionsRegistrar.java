package system;

import com.mendix.core.actionmanagement.IActionRegistrator;

public class UserActionsRegistrar
{
  public void registerActions(IActionRegistrator registrator)
  {
    registrator.registerUserAction(awsauthentication.actions.CreateAssumeRoleRequest.class);
    registrator.registerUserAction(awsauthentication.actions.GetSigV4Headers.class);
    registrator.registerUserAction(awskmsconnector.actions.CreateKey.class);
    registrator.registerUserAction(awskmsconnector.actions.Decrypt.class);
    registrator.registerUserAction(awskmsconnector.actions.Encrypt.class);
    registrator.registerUserAction(awskmsconnector.actions.GenerateDataKey.class);
    registrator.registerUserAction(encryption.actions.DecryptString.class);
    registrator.registerUserAction(encryption.actions.EncryptString.class);
    registrator.registerUserAction(encryption.actions.GeneratePGPKeyRing.class);
    registrator.registerUserAction(encryption.actions.PGPDecryptDocument.class);
    registrator.registerUserAction(encryption.actions.PGPEncryptDocument.class);
    registrator.registerUserAction(encryption.actions.ValidatePrivateKeyRing.class);
    registrator.registerUserAction(feedbackmodule.actions.ValidateEmail.class);
    registrator.registerUserAction(feedbackmodule.actions.XSS_Sanitizer.class);
    registrator.registerUserAction(system.actions.VerifyPassword.class);
  }
}
