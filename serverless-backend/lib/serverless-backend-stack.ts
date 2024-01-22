import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { join } from "path";

export class ServerlessBackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const productsTable = new dynamodb.Table(this, "Products", {
      partitionKey: { name: "id", type: dynamodb.AttributeType.STRING },
      tableName: "Products",
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
    });

    const productsFunction = new NodejsFunction(this, "ProductsFunction", {
      entry: join(__dirname, `/../src/products/index.ts`),
      bundling: {
        externalModules: ["aws-sdk"],
      },
      environment: {
        PRIMARY_KEY: "id",
        DYNAMODB_TABLE_NAME: productsTable.tableName,
      },
      runtime: Runtime.NODEJS_18_X,
    });

    productsTable.grantReadWriteData(productsFunction);
  }
}
