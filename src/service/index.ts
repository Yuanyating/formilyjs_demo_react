import request from "../helper/request"

type TSelectRemoteParams = {
  url: string,
  method: 'GET' | 'POST'
}

//获取xrender select下拉项通用接口
export const getSelectRemoteOptions = ({url, method, ...rest }: TSelectRemoteParams) => {
  return request({
    url: url,
    credentials: 'include',
    method: method,
    data: rest
  })
}

//校验表名是否唯一
export const validateTableName = (params: {tableName: string}) => {
  return request({
    url: '/uniqueValidate',
    credentials: 'include',
    method: 'GET',
    params,
  })
}