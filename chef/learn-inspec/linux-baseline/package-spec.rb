control 'package-08' do
  impact 1.0
  title 'Install auditd'
  desc 'auditd provides extended logging capacities on recent distribution'
  audit_pkg = os.redhat? || os.suse? || os.name == 'amazon' || os.name == 'fedora' ? 'audit' : 'auditd'
  describe package(audit_pkg) do
    it { should be_installed }
  end
  describe auditd_conf do
    its('log_file') { should cmp '/var/log/audit/audit.log' }
    its('log_format') { should cmp 'raw' }
    its('flush') { should match(/^INCREMENTAL|INCREMENTAL_ASYNC$/) }
    its('max_log_file_action') { should cmp 'keep_logs' }
    its('space_left') { should cmp 75 }
    its('action_mail_acct') { should cmp 'root' }
    its('space_left_action') { should cmp 'SYSLOG' }
    its('admin_space_left') { should cmp 50 }
    its('admin_space_left_action') { should cmp 'SUSPEND' }
    its('disk_full_action') { should cmp 'SUSPEND' }
    its('disk_error_action') { should cmp 'SUSPEND' }
  end
end