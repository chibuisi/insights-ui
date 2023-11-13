
//make api call to rainforest to retrieve session
import axios from "axios";

export default {
  FETCH_SESSION(context, jwt) {
    fetchSession(context, jwt);
  },

  //make api call to rainforest to onboard merchant
  ONBOARD() {
    return '';
  }
}

const fetchSession = async ({commit}, jwt) => {
  const rainforestSessionUrl = `${process.env.VUE_APP_RAINFOREST_SESSION_URL}`
  const requestTimeout = Number(`${process.env.VUE_APP_REQUEST_TIMEOUT}`);
  const auth = `sbx_session_${jwt}`;
  const config = {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: auth,
    },
    timeout: requestTimeout
  };
  const statements = {
    "statements": [
      {
        "$.filters..merchant.id": "{{Replace with the merchant_id}}",
        "$.resource": ["merchant", "merchant_application"],
        "$.action": ["read", "update", "create"]
      },
      {
        "$.resource": ["payment_method_config", "payment_method"],
        "$.action": ["create", "read", "update"]
      },
      {
        "$.resource": ["routing_number"],
        "$.action": ["read"]
      }
    ]
  };
  await axios.post(rainforestSessionUrl, statements, config)
  .then((response) => {
    console.log(response.json);
    commit('CREATE_SESSION',
        'f84b6699cf9e1074f8a1ede1b6fe4212bf08d2e9d1487dedd0385f3cf7a4f7ff');
  })
  .catch((error) => {
    console.log(error);
  });

}
