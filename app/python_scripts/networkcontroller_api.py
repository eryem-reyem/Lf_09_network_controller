from requests import request
import json

class BasicApi:

    def __init__(self) -> None:
        self._basic_url = "Http://localhost:58000/api/v1/"
        self._basic_headers = {
            'Content-Type': 'application/json'
        }

    def _basic_get(self, path:str, headers:dict):
        temp_headers = self.__get_headers_with_auth_token(headers=headers)
        temp_url = self._basic_url + path
        return request('GET', url=temp_url, headers=temp_headers)
    
    def _basic_post(self, url:str, headers:dict, payload:dict):
        return request('POST', url=url, headers=headers, data=json.dumps(payload))

    def __get_token(self) -> str:
        payload = {
            "username": "cisco",
            "password": "cisco123!"
            }
        response = self._basic_post(url=f"{self._basic_url}ticket",
                                headers=self._basic_headers,
                                payload=payload)
        return response.json()['response']['serviceTicket']
    
    def __get_headers_with_auth_token(self, headers) -> dict:
        headers['X-Auth-Token'] = self.__get_token()
        return headers

class Api(BasicApi):

    def __init__(self) -> None:
        super().__init__()

    def get_network_devices(self):
        response = self._basic_get(path='network-device',
                                   headers=self._basic_headers)
        return response.json()
    
    def get_hosts(self):
        response = self._basic_get(path='host',
                                   headers=self._basic_headers)
        return response.json()


if __name__ == '__main__':
    que = Api()
    networkdevices = que.get_network_devices()
    hosts = que.get_hosts()

    for i in networkdevices['response']:
        print(i)