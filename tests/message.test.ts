import { MessageUtil } from '../app/utils/message';
import { ResponseVO } from '../app/model/vo/responseVo';

describe('testing message file', () => {

  test('success message', () => {
    const data = [{
      'name': 'test',
      'createdAt': '2021-04-27T19:25:19.011Z'
    }];

    const exp: ResponseVO = {
      'statusCode': 200,
      'body': '{\"code\":0,\"message\":\"success\",\"data\":[{\"name\":\"test\",\"createdAt\":\"2021-04-27T19:25:19.011Z\"}]}'
    };

    expect(MessageUtil.success(data)).toEqual(exp);
  });

  test('error message', () => {
    const data = [{
      'name': 'test',
      'createdAt': '2021-04-27T19:25:19.011Z'
    }];

    const exp: ResponseVO = {
      'statusCode': 200,
      'body': '{\"code\":1000,\"message\":\"error\"}'
    };

    expect(MessageUtil.error(1000, "error")).toEqual(exp);
  });
});
