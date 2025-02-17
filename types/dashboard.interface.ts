interface CronitorData {
    monitors: Monitor[];
    page_size: number;
    page: number;
    total_monitor_count: number;
    version: string;
  }
  
  interface Monitor {
      attributes: Attributes;
      assertions: any[];
      created: string;
      disabled: boolean;
      failure_tolerance: number | null;
      grace_seconds: number;
      consecutive_alert_threshold: number;
      group: string | null;
      initialized: boolean;
      key: string;
      latest_event: LatestEvent;
      latest_events: any | null;
      latest_issue: any | null;
      latest_invocations: any | null;
      public_badge_url: string;
      metadata: any | null;
      name: string;
      next_expected_at: string | null;
      note: string | null;
      notify: string[];
      passing: boolean;
      paused: boolean;
      platform: string;
      realert_interval: string;
      request: CustomRequest;
      running: boolean;
      schedule: string;
      schedule_tolerance: any | null;
      tags: any[];
      timezone: string | null;
      type: string;
      environments: string[];
      statuspages: any[];
      site: any | null;
  }
  
  interface Attributes {
    group_name: string | null;
    site: Site;
    key: string;
    code: string;
  }
  
  interface Site {
    ssl: SSL;
    dns: DNS;
  }
  
  interface SSL {
    issued_to: string;
    issued_by: string;
    issued_at: string;
    expires_at: string;
  }
  
  interface DNS {
    name: string;
    expires_at: string;
    registrar: string;
    name_servers: string[];
  }
  
  interface LatestEvent {
    stamp: number;
    msg: string;
    event: string;
    metrics: Metrics;
    client: string | null;
    host: string;
    ip: string;
  }
  
  interface Metrics {
    duration: number;
  }
  
  interface CustomRequest {
      url: string;
      headers: Record<string, string>;
      cookies: Record<string, string>;
      body: string;
      method: string;
      timeout_seconds: number;
      regions: string[];
      follow_redirects: boolean;
      verify_ssl: boolean;
  }

  interface RenderArrInterface {
    label: string;
    key: string;
    type?: string;
    render_value?: (val: any) => string | number;
  }

  interface RenderDataProps {
    data: Monitor
  }