# Peyton — Freelance Design Promotion Strategy

Based on analysis of the Peyton Pours brand kit, event collateral, and print files in this repo.

---

## 1. What the work actually demonstrates

This matters more than it might seem, because a portfolio gets judged on *which* skills it proves, not how many files it has.

**Proven, with evidence in these files:**

| Skill | Evidence |
|---|---|
| Logo design & vector craft | Martini mark exists as clean SVG with proper gradients, in three lockups (mark, badge, horizontal) |
| Type pairing & hierarchy | Cormorant Garamond + Work Sans — a genuinely good, non-obvious pairing. Consistent scale across 12+ pieces |
| Color systems | Written in **oklch**, with defined roles (anchor / CTA / micro-accent). This is above-average discipline |
| Design systems thinking | `brand-tokens.md` exists at all. Most freelancers at this level have no token doc |
| Print production | Business cards built at correct 3.75×2.25 px for 3.5×2 trim + bleed, with a written vendor spec sheet |
| Concept range | Three completely different treatments of the *same* event content — pink/modern, navy cyanotype, sunset postcard |
| Web | Self-contained case-study page and a one-page site, both hand-built |

**That last row is the strongest thing here and it's currently buried.**

The Stacy & Steve pieces (cyanotype menu, "Greetings from Cousins Beach" postcard) take identical content — two cocktails, one date, one location — and render it in three unrelated visual worlds, each internally coherent. Botanical line art and gold rules in one; hand-lettering, a wax-stamp, and a lobster stamp in another. That is the single hardest thing to fake and the thing art directors actually screen for. It should be the *first* thing a prospect sees, not a file in a folder.

**Not yet proven:** work for a client who isn't herself. Everything here is self-directed. That's the central problem to solve, and section 3 is about solving it fast.

---

## 2. The strategic problem, stated plainly

Peyton Pours is a **bartending** brand. The user goal is selling **design**. These are two different businesses, and right now the design work exists only in service of the bartending one.

A portfolio of one project — where the client is yourself — reads to a prospect as "talented, unproven." Not fatal. But it caps what she can charge and means every lead requires convincing.

The fix is not "make more fake brands for imaginary coffee shops." Spec work for invented clients is the most common junior-portfolio mistake and buyers discount it heavily. The fix is in section 3.

---

## 3. Positioning: don't be a generalist designer

"Freelance graphic designer" is the single most competitive, most price-compressed category on the internet. She would be competing against Fiverr's floor with one case study.

**Recommended wedge: custom event collateral for private events and weddings.**

Menus, bar signage, seating charts, table numbers, invitations, day-of stationery.

Why this specific wedge is right for her, and not just a random niche:

1. **She has already made the exact deliverable.** The cyanotype and postcard menus *are* the product. Not adjacent to it — literally it. The portfolio is already 70% built for this niche and 10% built for any other.
2. **She has an unfair advantage nobody can copy: she works the bar.** She knows a bar sign has to read at 9pm in low light from six feet away with someone holding a drink. She knows which cocktails guests actually ask about. A designer who has never worked an event is guessing at that. **This is the whole pitch.** "Designed by someone who has actually worked your bar."
3. **Built-in distribution.** She is physically inside the target market — at events, standing next to the planners, photographers, venue coordinators, and caterers who refer this work. Most freelancers pay for access to that room. She's already being paid to stand in it.
4. **The buyer already has budget and is not price-shopping.** Someone spending on a private bartender is not looking for the cheapest menu card. Wedding and milestone-event budgets absorb $150–600 of stationery without blinking.
5. **Recurring, seasonal, referral-driven.** One happy bride generates two more. Wedding season is predictable.

**Positioning line to use:**

> Custom bar menus and event signage for weddings and private parties — designed by a bartender who has worked the event.

**Rate for the first three months:** $150–350 per event package (menu + bar sign + one extra piece). Deliberately low to convert the first paying clients into testimonials and photos. Raise to $400–700 once there are three real client stories with photos. Do not go below $150 — under-pricing attracts the clients who cost the most time.

---

## 4. Fix the portfolio before promoting anything

There are real defects in the current files. Sending these to a prospect would undercut the "detail-oriented" claim.

**Must fix:**

1. **`peyton-pours-brand-kit/bar-sign/bar-sign-8x10.png` is broken.** The wordmark is clipped by the canvas — the final "s" in "Pours" is cut in half, and the tagline truncates to "PRIVATE PAR". Verified by cropping the right edge. This file is unusable for print or portfolio. The root-level `Peyton Pours - Bar Sign v6-selection.png` has the correct, uncut composition — but it's only 960×1200, which is 120 PPI at 8×10 and too soft to print. **The 8×10 needs to be re-exported at 2400×3000 with the composition from v6.**

2. **The bar sign is not 300 DPI.** At 1920×2400 for an 8×10, that's 240 PPI. Fine for screen, under spec for print.

3. **DPI metadata on the print-ready cards says 72, not 300.** The *pixel dimensions* are correct (1125×675 = 3.75″×2.25″ at 300), so VistaPrint will render them correctly and the README's instructions are sound. But any tool that reads the embedded DPI tag will report these as 15.6″×9.4″ documents. Worth stamping to 300 so the files self-describe correctly — some vendors and most designers will read that tag.

4. **Personal phone number and email are baked into published card art.** `262-501-5415` and the gmail address are rendered into `business-cards/dark-back.png` and `light-back.png`. That's her real contact info in a public GitHub repo, and it's already deployed. Fine if intentional for a business card — that's what cards are for — but worth a deliberate decision rather than a default, and consider a business-only email and a Google Voice number for anything public-facing.

**Should fix:**

5. **The case study doesn't tell a story.** It shows artifacts. Buyers of design need to see *thinking*: what the constraint was, what was tried, why the final direction won. She has the raw material for this already — the three Stacy & Steve directions are a ready-made "here's the exploration, here's the pick, here's why."

6. **`README.md` at repo root still describes the compliment site**, not the design work. Anyone landing on this repo gets the wrong story.

---

## 5. The conflict nobody has flagged yet

**`peytonropas.com` currently hosts a page about how pretty she is.**

If the goal is landing freelance design clients, this actively works against it. A prospective client — a bride, a planner, a venue manager — who googles "Peyton Ropas" lands on a site whose entire content is compliments about her appearance. That frames her as decorative at exactly the moment she needs to be framed as competent. It undercuts the rate she can ask for and the seriousness of the pitch.

The site is lovely as a personal gift. It is the wrong thing to have at the top of her professional search results.

**Recommendation:** move the compliment site to an unlisted URL or a subdomain nobody links to, and put the design portfolio at `peytonropas.com`. Keep `peytonpours.com` for the bartending business. Three properties, three jobs:

- `peytonpours.com` → book her to bartend your event
- `peytonropas.com` → hire her to design your event collateral
- the compliment site → private, for her

This is her call, not mine — but it should be a decision, not an accident.

---

## 6. 30 / 60 / 90 day plan

### Days 1–30: make it real

- [ ] Fix the four portfolio defects in section 4
- [ ] Rebuild the case study around the *three-direction exploration*, not the finished logo
- [ ] Shoot real photos: cards in hand, bar sign framed at an actual event, menu on a bar top. **Flat PNGs of artwork convert far worse than photos of the thing existing in the world.** This is the highest-ROI hour available
- [ ] Stand up the portfolio at `peytonropas.com` with three sections: the exploration, the identity system, the print production
- [ ] Instagram: `@peytonpours` posting the *design*, not just the drinks. Process reels — three directions, pick one — outperform finished-work posts by a wide margin
- [ ] **Offer the next three bartending clients a free custom menu.** This is the single fastest path out of the one-case-study problem. Costs her a few hours, produces real client work, real photos, and a real testimonial. Frame it as "I'm building my design portfolio, I'd love to make you a custom menu at no charge"

### Days 31–60: get paid

- [ ] Convert free menus into three testimonials with photos
- [ ] Package the offer into named tiers with fixed prices — "Bar Menu," "Bar Menu + Sign," "Full Event Suite." Fixed pricing closes faster than hourly and stops the negotiation
- [ ] Introduce herself to 10 local wedding vendors in Lake Country / Delafield / Oconomowoc — planners, photographers, venues, caterers. **She has a reason to be in the room that other designers don't.** Ask to be their referral for stationery
- [ ] List on The Knot and WeddingWire as an event stationery vendor
- [ ] Add a one-line upsell to every bartending quote: "Want a custom menu for your bar? +$150"

### Days 61–90: compound it

- [ ] Raise rates to $400–700 per package once three paid client stories exist
- [ ] Etsy shop for semi-custom templates — the same three directions sold as fill-in-your-details designs. Near-zero marginal cost, sells while she sleeps, and feeds the custom pipeline
- [ ] Pitch one venue on a standing arrangement: their events, her stationery
- [ ] Write one process post on the Stacy & Steve project. Wedding planners read this; it's how vendors get found

---

## 7. Channel priority, ranked by expected return

| Rank | Channel | Why |
|---|---|---|
| 1 | **In-person vendor referrals** | She's already at the events. Highest trust, zero CAC, best-fit clients. Nothing else is close |
| 2 | **Instagram (process, not portfolio)** | Where brides and planners actually look. Process content outperforms finished work |
| 3 | **Upsell to existing bartending clients** | Warmest possible lead — they already hired her and trust her taste |
| 4 | **The Knot / WeddingWire** | High intent, they arrive ready to buy |
| 5 | **Etsy semi-custom templates** | Passive revenue, funnels into custom work |
| 6 | Cold outreach / Fiverr / Upwork | Skip entirely. Price-compressed, wrong buyers, destroys positioning |

---

## 8. The one-sentence version

She is not a graphic designer looking for clients. She is **a bartender who designs the event around the bar** — and that combination has no real competition in Lake Country, already has the portfolio pieces to prove it, and puts her in the referral room every single weekend.
