# Geo Bharat - AI Climate Finance & Resilience Platform

**Razorpay AI Buildathon - Open Track + AI Finance Controller**

Geo Bharat is an electronic compass app + climate resilience platform for coastal India (Puducherry/Chennai). This build adds a Razorpay-powered finance layer.

**Live Demo:** https://geo-bharat-chi.vercel.app

### Problem
1. Climate NGOs lose donations due to payment failures & checkout drop-offs
2. No transparency linking payments to real climate action
3. AI agents cannot discover and transact climate donations

### Solution (Built for Razorpay)
Integrated Razorpay Test Mode APIs:

**1. AI Revenue Recovery Agent:** Detects failed/abandoned payments, classifies reason (network/bank/drop-off), and auto-triggers bounded recovery - smart retry + WhatsApp nudge in Tamil/English

**2. Transparent Fund Audit Trail:** Every Razorpay payment_id mapped to tangible outcome (e.g., "₹500 = 1 flood sensor"). Every money action is explainable, bounded, gated. Shows audit log + one failure handled gracefully.

**3. Agent-Readable Catalog:** `/api/catalog` endpoint makes donations transactable by AI buyer (for UAP/ACP/AP2 ready agentic commerce)

### Architecture
Frontend: React + TypeScript + Vite + Mapbox
Backend: Node.js (Bun) + Razorpay Test API
AI: Gemini for donor intent
Structure:
`src/` -> UI + compass + climate maps
`/api/razorpay` -> Checkout, webhook handler, recovery logic
`/api/catalog` -> Agent-readable JSON for AI buyers

### Razorpay Integration (Test Mode)
- Checkout: `razorpay.checkout.js` with test key
- Webhook: `/api/webhook` verifies signature, logs payment.captured / payment.failed
- Recovery: If failed, push to retry queue with exponential backoff

### What Broke & How I Fixed It
1. **Webhook delay in test mode:** Payments stuck as pending. Fix: Built local retry queue + audit table to show final status honestly.
2. **CORS with Mapbox + Razorpay:** Checkout overlay blocked. Fix: Lightweight proxy server in Vite config.
3. **Gemini quota hit:** Tamil donor messages failed. Fix: Added Redis caching + fallback templates, measured false-positive cost.

Metrics: Precision/Recall on recovery attempts logged, false-positive cost tracked (don't spam donor).

### How to Run
bun install
bun run dev
Set .env: RAZORPAY_KEY_ID=rzp_test_xxx, RAZORPAY_KEY_SECRET=xxx

### Pitch Video
[Add your 5-min video link here after upload]

Built by Mahima - Coastal resilience enthusiast from Puducherry.
