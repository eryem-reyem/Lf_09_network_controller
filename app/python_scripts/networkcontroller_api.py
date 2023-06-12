from requests import request
import json


class BasicApi:

    def __init__(self) -> None:
        self._basic_url = "Http://localhost:58000/api/v1/"
        self._basic_headers = {
            'Content-Type': 'application/json'
        }

    def _basic_get(self, path: str, headers: dict):
        temp_headers = self.__get_headers_with_auth_token(headers=headers)
        temp_url = self._basic_url + path
        return request('GET', url=temp_url, headers=temp_headers)

    def _basic_post(self, path: str, headers: dict, payload: dict):
        temp_headers = self.__get_headers_with_auth_token(headers=headers)
        temp_url = self._basic_url + path
        return request('POST', url=temp_url, headers=temp_headers, data=json.dumps(payload))

    def __get_token(self) -> str:
        payload = {
            "username": "cisco",
            "password": "cisco123!"
        }
        response = request('POST',
                           url=f"{self._basic_url}ticket",
                            headers=self._basic_headers,
                            data=json.dumps(payload))
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
    
    def get_users(self):
        response = self._basic_get(path=f'user',
                                   headers=self._basic_headers)
        return response.json()
        
    def add_user(self, username, password, role):
        payload = {
            "username": username,
            "password": password,
            "authorization":[{"role": role}]
            }
        response = self._basic_post(path='user',
                                    headers=self._basic_headers,
                                    payload=payload)
        return response.json()

if __name__ == '__main__':
    que = Api()
    print(que.get_users())
