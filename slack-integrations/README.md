# Slack Integrations.

## 1. Gitlab Integrations with Slack.

![N|Solid](https://docs.gitlab.com/ee/user/project/integrations/img/gitlab_slack_app_landing_page.png)

### 1.1 Slack Configuration:
- Sign in to your Slack team and start a new Incoming WebHooks configuration.
- Select the Slack channel where notifications will be sent to by default. Click the Add Incoming WebHooks integration button to add the configuration.
- Copy the Webhook URL, which we’ll use later in the GitLab configuration.

### 1.2 GitLab Configuration:
- Navigate to the Integrations page in your project’s settings, i.e. Project > Settings > Integrations.
- Select the Slack notifications project service to configure it.
- Check the Active checkbox to turn on the service.
- Check the checkboxes corresponding to the GitLab events you want to send to Slack as a notification.
- For each event, optionally enter the Slack channel where you want to send the event. (Do not include the # symbol.) If left empty, the event will be sent to the default channel that you configured in the Slack Configuration step.
- Paste the Webhook URL that you copied from the Slack Configuration step.
- Optionally customize the Slack bot username that will be sending the notifications.
- Configure the remaining options and click Save changes.
- Your Slack team will now start receiving GitLab event notifications as configured.

![N|Solid](https://docs.gitlab.com/ee/user/project/integrations/img/slack_configuration.png)

