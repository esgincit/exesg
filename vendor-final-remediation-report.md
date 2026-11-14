# Remediation Report — Risk Profile Findings

**Client:** Executive Software Guild (ESG)
**Reference:** Vendor Risk Profile dated 2026-11-04 (29 findings across exesg.us and exesg.in; 3 supplementary web page review items)
**Response date:** 2026-11-14
**Result:** All 29 findings resolved and live-verified. All 3 supplementary page-review items addressed.

---

## 1. Executive summary

Following the risk profile dated 2026-11-04, the entire web platform for exesg.us and exesg.in was migrated from a legacy PHP/cPanel origin (GoDaddy shared hosting) to **Cloudflare Pages** — a managed, fully static hosting platform with no server-side runtime. This structural change eliminated the entire class of findings related to PHP vulnerabilities, missing TLS on service hostnames, and an origin with a broken/expired certificate.

In parallel, domain email-security controls (SPF, DKIM, DMARC) were brought into alignment for both domains, and both domains were consolidated under a single canonical website (www.exesg.us).

Key measures completed:

| Measure | Detail |
|---|---|
| Platform migration | Both domains moved to Cloudflare Pages (static site, no PHP, no public database) |
| TLS | Every hostname terminates on Cloudflare's edge with valid, auto-managed certificates |
| HTTPS enforcement | "Always Use HTTPS" enabled zone-wide on both domains (permanent 301s) |
| TLS hardening | Minimum TLS version raised to 1.2 |
| SPF | Updated for exesg.us (Google Workspace + GoDaddy senders); created for exesg.in (Google Workspace) |
| DKIM | Enabled for exesg.us (published and verified 2026-11-13) |
| DMARC | exesg.in: `p=quarantine` with reporting. exesg.us: escalated to `p=quarantine` with subdomain policy (`sp=quarantine`) on 2026-11-14 after SPF/DKIM verification; aggregate reporting remains active |
| Consolidation | exesg.in now performs a permanent 301 redirect to www.exesg.us (canonical single website) |
| Legacy URL compatibility | All legacy `.html`/`.php` URLs redirect transparently to the new routes |
| Code management | Full site source published under version control (github.com/esgincit/exesg) |

---

## 2. Finding-by-finding responses

| # | Domain / Property | Finding | Severity | Status | Remediation summary |
|---|---|---|---|---|---|
| 1 | exesg.us | SSL not available | Critical | **Resolved** | Migrated to Cloudflare Pages; valid edge TLS; verified 200 OK over HTTPS |
| 2 | exesg.us | HTTP does not redirect to HTTPS | High | **Resolved** | "Always Use HTTPS" enforced at the edge; permanent 301s; verified live |
| 3 | exesg.us | DMARC policy is p=none | High | **Resolved** | Escalated to `p=quarantine; sp=quarantine` on 2026-11-14 after SPF alignment and DKIM signing (published/verified 2026-11-13) were confirmed in place; aggregate reporting remains enabled |
| 4 | admin.exesg.us | End-of-life version of PHP | High | **Resolved** | Hostname now serves a fully static site — no PHP runtime exists publicly |
| 5 | admin.exesg.us | SSL not available | Critical | **Resolved** | Served over valid edge TLS; verified 200 OK over HTTPS |
| 6 | admin.exesg.us | CVE-2026-109618 (PHP out-of-memory RCE) | Critical | **Resolved** | No PHP executes on this hostname; vulnerable code path removed from public reachability |
| 7 | admin.exesg.us | CVE-2026-109619 (PHP stale-global-state UAF RCE) | Critical | **Resolved** | Same as #6 — PHP runtime removed from public reachability |
| 8 | ftp.exesg.us | End-of-life version of PHP | High | **Resolved** | Hostname now serves the fully static site — no PHP runtime exists publicly |
| 9 | ftp.exesg.us | SSL not available | Critical | **Resolved** | Served over valid edge TLS; verified 200 OK over HTTPS |
| 10 | ftp.exesg.us | CVE-2026-109618 | Critical | **Resolved** | PHP runtime no longer publicly reachable on this hostname |
| 11 | ftp.exesg.us | CVE-2026-109619 | Critical | **Resolved** | Same as #10 |
| 12 | webmail.exesg.us | SSL not available | Critical | **Resolved** | Mail operates via Google Workspace; obsolete endpoint now serves the website over valid TLS; verified live |
| 13 | cpanel.exesg.us | SSL not available | Critical | **Resolved** | Origin TLS was found non-functional (522 errors at verification time); hostname now serves the site over valid TLS; cPanel administered via the provider's secure portal |
| 14 | whm.exesg.us | SSL not available | Critical | **Resolved** | Same as #13; verified 200 OK over HTTPS |
| 15 | mail.exesg.us | SSL not available | Critical | **Resolved** | Verified 200 OK over HTTPS |
| 16 | mail.exesg.us | HTTP does not redirect to HTTPS | High | **Resolved** | Zone-wide enforcement; permanent 301s |
| 17 | webdisk.exesg.us | SSL not available | Critical | **Resolved** | Verified 200 OK over HTTPS |
| 18 | webdisk.admin.exesg.us | SSL not available | Critical | **Resolved** | Verified 200 OK over HTTPS |
| 19 | www.admin.exesg.us | SSL not available | Critical | **Resolved** | Verified 200 OK over HTTPS |
| 20 | autoconfig.exesg.us | SSL not available | Critical | **Resolved** | Verified 200 OK over HTTPS |
| 21 | autoconfig.exesg.us | HTTP does not redirect to HTTPS | High | **Resolved** | Zone-wide enforcement; permanent 301s |
| 22 | autoconfig.admin.exesg.us | SSL not available | Critical | **Resolved** | Verified 200 OK over HTTPS |
| 23 | autoconfig.admin.exesg.us | HTTP does not redirect to HTTPS | High | **Resolved** | Zone-wide enforcement; permanent 301s |
| 24 | autodiscover.exesg.us | SSL not available | Critical | **Resolved** | Verified 200 OK over HTTPS |
| 25 | autodiscover.admin.exesg.us | SSL not available | Critical | **Resolved** | Verified 200 OK over HTTPS |
| 26 | exesg.in | SSL expired | High | **Resolved** | DNS for exesg.in now terminates on Cloudflare's edge; visitors receive a valid auto-managed certificate; verified 200 OK over HTTPS |
| 27 | exesg.in | Hostname does not match SSL certificate | High | **Resolved** | TLS termination for exesg.in and www.exesg.in occurs on Cloudflare's edge with hostname-matched certificates; verified live |
| 28 | exesg.in | SPF not enabled | High | **Resolved** | SPF published and live: `v=spf1 include:_spf.google.com ~all` (mail via Google Workspace); verified via public DNS 2026-11-13 |
| 29 | exesg.in | DMARC policy not found | High | **Resolved** | DMARC published and live: `v=DMARC1; p=quarantine` with aggregate reporting (rua); stricter than exesg.us; verified via public DNS 2026-11-13 |

All "Resolved" items were verified live on 2026-11-13/14 — each affected hostname returns 200 OK over valid HTTPS, or the DNS record was confirmed resolving through public resolvers.

---

## 3. Supplementary items from the web page review

| # | Item | Status | Response |
|---|---|---|---|
| 1 | "Disclaimer" link pointed to /contact/ instead of a disclaimer page | **Resolved** | Dedicated Disclaimer page live at /disclaimer/ with the original site's disclaimer content; footer link updated; legacy /disclaimer.html redirects to it |
| 2 | No privacy policy linked, though the form collects personal data | **Resolved** | Privacy Policy live at /privacy/ covering data collected, third-party processors (Cloudflare, form-delivery service, Google Workspace), retention, cookies, user rights and contact channel; linked from the footer and from a consent notice directly beneath the contact form's submit button; included in the sitemap |
| 3 | Meta tags (e.g., og:title) may be printing as visible body text | **Verified — no defect** | The Open Graph tags are correctly placed in the document `<head>` as standard meta tags and are never rendered as visible text in a browser. The observation is an artefact of the extraction tooling reading meta-tag markup (and the framework's invisible hydration data) as page text. No change required |

---

## 4. Ongoing security practice

- Aggregate DMARC reports are monitored for both domains; escalation of exesg.us to `p=reject` is recommended as the follow-on step once quarantine has run cleanly for a reporting period.
- Administrative credentials for the platforms used (Cloudflare, GitHub) are held by named staff and rotated after any third-party sharing.
- The contact form uses a managed submission service with one-time domain activation and built-in spam handling.

---

## 5. Request

A re-scan of exesg.us and exesg.in is requested to confirm the updated security posture. Should any finding remain open after the re-scan, we ask the vendor to provide the specific evidence collected so we can address it directly.
