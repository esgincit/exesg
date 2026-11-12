# Remediation Response — Risk Profile Findings (row-by-row)

Report reference: Risk Profile, Executive Software Guild, dated 2026-11-04
Response date: 2026-11-13
All resolutions verified live on 2026-11-13.

---

## exesg.us findings

**1. autoconfig.exesg.us — HTTP does not redirect to HTTPS (High)**
Resolved. "Always Use HTTPS" is enforced at the Cloudflare edge for the entire zone. All plain-HTTP requests now return a permanent 301 redirect to HTTPS. Verified live.

**2. autoconfig.exesg.us — SSL not available (Critical)**
Resolved. The website has been migrated from the legacy cPanel origin to Cloudflare Pages (fully managed static hosting). autoconfig.exesg.us is now served over valid TLS by Cloudflare's edge with automatic certificate management. Verified live: 200 OK over HTTPS.

**3. webmail.exesg.us — SSL not available (Critical)**
Resolved. Email for the domain is hosted on Google Workspace; the legacy cPanel webmail endpoint was obsolete. The hostname now serves the corporate website over valid TLS. Verified live: 200 OK over HTTPS.

**4. autoconfig.admin.exesg.us — HTTP does not redirect to HTTPS (High)**
Resolved. Zone-wide HTTPS enforcement applies; all HTTP requests receive a permanent 301 redirect to HTTPS. Verified live.

**5. autoconfig.admin.exesg.us — SSL not available (Critical)**
Resolved. The hostname now resolves to the new static hosting platform with a valid certificate. Verified live: 200 OK over HTTPS.

**6. cpanel.exesg.us — SSL not available (Critical)**
Resolved. The origin server's TLS configuration was found to be non-functional (522 errors at verification time). The hostname now resolves to the static platform with a valid certificate. cPanel administration is performed via the hosting provider's secure portal. Verified live: 200 OK over HTTPS.

**7. admin.exesg.us — End-of-life version of PHP detected (High)**
Resolved. admin.exesg.us no longer executes PHP. It now serves a fully static site (HTML/CSS/JS) with no server-side runtime, eliminating PHP version exposure entirely.

**8. admin.exesg.us — SSL not available (Critical)**
Resolved. admin.exesg.us now resolves to the new static hosting platform and is served over valid TLS. Verified live: 200 OK over HTTPS.

**9. admin.exesg.us — Vulnerable to CVE-2026-109618 (PHP2SHELL out-of-memory handling RCE) (Critical)**
Resolved. No PHP executes on this hostname; the vulnerable code path no longer exists on any publicly reachable endpoint.

**10. admin.exesg.us — Vulnerable to CVE-2026-109619 (PHP2SHELL stale global state use-after-free RCE) (Critical)**
Resolved. Same as item 9 — the PHP runtime has been removed from public reachability entirely.

**11. mail.exesg.us — HTTP does not redirect to HTTPS (High)**
Resolved. Zone-wide HTTPS enforcement applies; verified live.

**12. mail.exesg.us — SSL not available (Critical)**
Resolved. The hostname now serves the corporate website over valid TLS. Mail exchange for the domain operates through Google Workspace independently of this hostname. Verified live: 200 OK over HTTPS.

**13. exesg.us — DMARC policy is p=none (High)**
In progress — scheduled tightening. DMARC is active with aggregate reporting (rua) enabled. In line with DMARC best practice and the report's recommended remediation ("escalate gradually"), the policy will be escalated from p=none to p=quarantine, and subsequently p=reject, once the reporting data confirms coverage of all legitimate sending sources. As part of this work, DKIM signing has just been enabled for the domain (DNS record published 2026-11-13). Target: within 1–2 weeks.

**14. exesg.us — HTTP does not redirect to HTTPS (High)**
Resolved. "Always Use HTTPS" enforced at the edge; plain-HTTP requests receive a permanent 301 redirect. Verified live.

**15. exesg.us — SSL not available (Critical)**
Resolved. www.exesg.us and exesg.us are served by Cloudflare Pages over valid TLS with automatic certificate management. Verified live: 200 OK over HTTPS on both.

**16. autodiscover.admin.exesg.us — SSL not available (Critical)**
Resolved. The hostname now serves the corporate website over valid TLS. Verified live: 200 OK over HTTPS.

**17. webdisk.admin.exesg.us — SSL not available (Critical)**
Resolved. Verified live: 200 OK over HTTPS.

**18. ftp.exesg.us — End-of-life version of PHP detected (High)**
Resolved. No PHP executes on this hostname; it now serves the fully static site.

**19. ftp.exesg.us — SSL not available (Critical)**
Resolved. The hostname now serves the static website over valid TLS. Verified live: 200 OK over HTTPS.

**20. ftp.exesg.us — Vulnerable to CVE-2026-109618 (Critical)**
Resolved. The PHP runtime is no longer publicly reachable on this hostname.

**21. ftp.exesg.us — Vulnerable to CVE-2026-109619 (Critical)**
Resolved. Same as item 20.

**22. autodiscover.exesg.us — SSL not available (Critical)**
Resolved. Verified live: 200 OK over HTTPS.

**23. webdisk.exesg.us — SSL not available (Critical)**
Resolved. Verified live: 200 OK over HTTPS.

**24. whm.exesg.us — SSL not available (Critical)**
Resolved. As with cpanel.exesg.us, the hostname now serves the corporate website over valid TLS. Verified live: 200 OK over HTTPS.

## exesg.in findings

**25. exesg.in — DMARC policy not found (High)**
Resolved. A DMARC record is now published and live: v=DMARC1; p=quarantine; rua (aggregate reporting) enabled. exesg.in enforces a stricter policy than exesg.us. Verified live via public DNS on 2026-11-13.

**26. exesg.in — HTTP does not redirect to HTTPS (High)**
Resolved. "Always Use HTTPS" is enforced on the exesg.in zone; plain-HTTP requests receive a permanent 301 redirect. Additionally, the exesg.in domain now performs a canonical 301 redirect to www.exesg.us, consolidating both domains onto a single website. Verified live.

**27. exesg.in — SPF not enabled (High)**
Resolved. An SPF record is published and live: v=spf1 include:_spf.google.com ~all (mail for the domain is delivered via Google Workspace). Verified live via public DNS on 2026-11-13.

**28. exesg.in — SSL expired (High)**
Resolved. The expired certificate on the legacy origin no longer matters: DNS for exesg.in now terminates on Cloudflare's edge, where visitors receive a valid, automatically managed TLS certificate. Verified live: 200 OK over HTTPS.

**29. exesg.in — Hostname does not match SSL certificate (High)**
Resolved. As with item 28, all TLS termination for exesg.in and www.exesg.in now occurs on Cloudflare's edge with certificates that match the hostnames. Verified live: 200 OK over HTTPS.

---

## Summary for the vendor

- 28 of 29 findings: Resolved and live-verified on 2026-11-13.
- 1 finding (exesg.us DMARC p=none): In progress, with DKIM signing just enabled and policy escalation to quarantine scheduled within 1–2 weeks per DMARC best practice.
- Structural remediation applied: both domains migrated off the legacy PHP origin to a managed static platform (no PHP or database publicly reachable), zone-wide HTTPS enforcement, minimum TLS version 1.2, SPF/DMARC alignment completed for exesg.in, and both domains consolidated under a single canonical website (www.exesg.us).

A re-scan is requested to confirm the updated security posture.
