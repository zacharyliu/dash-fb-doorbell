# dash-fb-doorbell
Virtual doorbell which alerts a Facebook group chat when an Amazon Dash Button is pressed.

## Usage
Follow the [setup steps for dash-button-probe](https://github.com/zacharyliu/dash-button-probe) to configure your Dash Button.

Set up the following config values (either using a `.env` dotenv file, or using environment variables):

- `INTERFACE`: Wi-Fi hardware interface
- `SSID`: SSID configured on your Dash Button
- `FB_EMAIL`: Facebook login email
- `FB_PASSWORD`: Facebook login password
- `FB_THREAD_ID`: thread ID of the group chat
- `FB_MESSAGE`: message to send to the chat
