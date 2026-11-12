# Remediation Response — Risk Profile Findings (exesg.us)

Report reference: Risk Profile, Executive Software Guild, dated 2026-11-04
Response date: 2026-11-12
All resolutions verified live on 2026-11-12.

---

**1. SSL not available — exesg.us (Critical)**
Status: Resolved.
The website has been migrated from the legacy cPanel origin to Cloudflare Pages, a fully managed static hosting platform. All traffic to exesg.us is now served over valid TLS by Cloudflare's edge network with automatic certificate management. Verified live: https://exesg.us returns 200 OK over HTTPS.

**2. HTTP does not redirect to HTTPS — exesg.us (High)**
Status: Resolved.
"Always Use HTTPS" is enforced at the Cloudflare edge. All plain-HTTP requests now receive a permanent 301 redirect to HTTPS. Verified live.

**3. DMARC policy is p=none — exesg.us (High)**
Status: In progress — planned tightening.
DMARC is active with reporting (rua) enabled; aggregate reports are being collected to identify all legitimate sending sources before enforcement. Per DMARC best practice, the policy will be escalated from p=none to p=quarantine, and subsequently p=reject, once the reporting data confirms full coverage of legitimate senders. Target: within 2–4 weeks.

**4. SSL not available — admin.exesg.us (Critical)**
Status: Resolved.
admin.exesg.us now resolves to the new static hosting platform and is served over valid TLS. Verified live: 200 OK over HTTPS.

**5. End-of-life version of PHP detected — admin.exesg.us (High)**
Status: Resolved.
admin.exesg.us no longer runs any PHP. It now serves a fully static site (HTML/CSS/JS) with no server-side runtime, eliminating PHP version exposure entirely.

**6. Vulnerable to CVE-2026-109618 (PHP out-of-memory handling RCE) — admin.exesg.us (Critical)**
Status: Resolved.
No PHP executes on this hostname; the vulnerable code path no longer exists on any publicly reachable endpoint.

**7. Vulnerable to CVE-2026-109619 (PHP stale global state use-after-free RCE) — admin.exesg.us (Critical)**
Status: Resolved.
Same as item 6 — the entire PHP runtime has been removed from public reachability.

**8. SSL not available — webmail.exesg.us (Critical)**
Status: Resolved.
Email for the domain is hosted on Google Workspace (MX records point to Google's servers); the legacy cPanel webmail endpoint was obsolete. The hostname now serves the corporate website over valid TLS. Verified live: 200 OK over HTTPS.

**9. SSL not available — cpanel.exesg.us and whm.exesg.us (Critical)**
Status: Resolved.
The origin server's TLS configuration was found to be non-functional (these hostnames returned 522 errors at verification time). Both hostnames now resolve to the static hosting platform with valid certificates. cPanel administration continues to be accessed through the hosting provider's secure portal, and exposing these endpoints publicly is no longer necessary. Verified live: 200 OK over HTTPS.

**10. SSL not available — mail.exesg.us (Critical) + HTTP does not redirect to HTTPS — mail.exesg.us (High)**
Status: Resolved.
mail.exesg.us now serves the website over valid TLS with HTTP-to-HTTPS redirection enforced. Mail exchange for the domain operates through Google Workspace independently of this hostname. Verified live: 200 OK over HTTPS.

**11. SSL not available — ftp.exesg.us (Critical)**
Status: Resolved.
The hostname now serves the static website over valid TLS. Verified live: 200 OK over HTTPS.

**12. End-of-life PHP + CVE-2026-109618 + CVE-2026-109619 — ftp.exesg.us (High / Critical / Critical)**
Status: Resolved (all three).
As with admin.exesg.us, no PHP is executed on this hostname; the vulnerable runtime is no longer publicly reachable.

**13. SSL not available — webdisk.exesg.us, webdisk.admin.exesg.us, www.admin.exesg.us (Critical)**
Status: Resolved.
All three hostnames now resolve to the static hosting platform with valid TLS certificates. Verified live: 200 OK over HTTPS.

**14. SSL not available + HTTP does not redirect — autoconfig.exesg.us, autoconfig.admin.exesg.us, autodiscover.exesg.us, autodiscover.admin.exesg.us (Critical / High)**
Status: Resolved.
All four auto-discovery hostnames now serve the corporate website over valid TLS with enforced HTTPS redirection. Verified live: 200 OK over HTTPS.

---

## Summary

- 13 of 14 findings: Resolved and live-verified on 2026-11-12.
- 1 finding (DMARC p=none): In progress, with enforcement escalation scheduled after sender verification.
- Additional hardening applied during remediation: HTTP→HTTPS enforced zone-wide, minimum TLS version raised to 1.2, all hostnames migrated off the legacy origin server to a managed static platform (no PHP, no database exposed publicly).

A re-scan is requested to confirm the updated posture.
