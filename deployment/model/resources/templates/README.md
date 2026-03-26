# Configuration templates
## Amazon Web Console
### AWS Key Management Service (KMS)
#### Permissions policy
The permissions policy template below is designed to provide the necessary permissions for users to manage and utilize AWS KMS keys effectively. 
It includes permissions for key management, encryption, decryption, and other related actions. The policy is structured to allow both administrative and usage permissions,
ensuring that users can perform their tasks while maintaining security best practices.

To apply in your AWS environment, replace `$ACCOUNT_ID` with your actual AWS account ID and attach the policy to the appropriate IAM users, groups, or roles.
```json
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "VisualEditor0",
			"Effect": "Allow",
			"Action": [
				"kms:GetPublicKey",
				"kms:GetKeyRotationStatus",
				"kms:DescribeKey"
			],
			"Resource": "arn:aws:kms:*:$ACCOUNT_ID:key/*"
		},
		{
			"Sid": "Administrator0",
			"Effect": "Allow",
			"Action": [
				"kms:Create*",
				"kms:Describe*",
				"kms:Enable*",
				"kms:List*",
				"kms:Put*",
				"kms:Update*",
				"kms:Revoke*",
				"kms:Disable*",
				"kms:Get*",
				"kms:Delete*",
				"kms:TagResource",
				"kms:UntagResource",
				"kms:ScheduleKeyDeletion",
				"kms:CancelKeyDeletion",
				"kms:RotateKeyOnDemand"
			],
			"Resource": "*"
		},
		{
			"Sid": "Usage1",
			"Effect": "Allow",
			"Action": [
				"kms:Encrypt",
				"kms:Decrypt",
				"kms:ReEncrypt*",
				"kms:GenerateDataKey*",
				"kms:DescribeKey"
			],
			"Resource": "*"
		}
	]
}
```
