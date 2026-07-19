# Schema Specification

Field-level requirements, not implementation. Validate everything in Google's Rich Results Test before launch.

## Site-wide

**WebSite**
- name, url, publisher reference, potentialAction (SearchAction) if site search exists

**Person** (the central entity — most important for a personal brand)
- name: Muhammad Umair
- alternateName: Umair
- jobTitle: Local SEO Specialist
- url: itsumair.com
- image: headshot URL
- description: niche positioning line
- knowsAbout: Local SEO, Google Business Profile Optimization, Website Design, Bathroom Remodeling Marketing
- sameAs: LinkedIn, Facebook, Instagram, TikTok, YouTube, GitHub — all profile URLs
- worksFor: reference to the ProfessionalService entity

**ProfessionalService**
- name, url, description
- image, logo
- email, telephone
- areaServed: Tampa, St. Petersburg, Clearwater, Largo, Brandon, Palm Harbor, and the Tampa Bay metro
- serviceType: Local SEO, Google Business Profile Optimization, Website Design, Website Maintenance
- founder: reference to Person
- priceRange (if pricing is published)
- sameAs: social profiles

**IMPORTANT:** do NOT include a `PostalAddress` implying a Tampa location. There is no US physical presence. Falsifying address data is a real risk. Use `areaServed` to express geographic scope instead.

---

## Per page type

| Page | Schema types |
|---|---|
| Homepage | ProfessionalService, Person, WebSite, FAQPage |
| Service pages | Service (provider, areaServed, serviceType), FAQPage, BreadcrumbList |
| Pillar | Article, BreadcrumbList, FAQPage if applicable |
| Case studies | Article, BreadcrumbList, Review if a genuine testimonial exists |
| About | Person (full), BreadcrumbList |
| Pricing | Service with offers where genuine, FAQPage, BreadcrumbList |
| Contact | ContactPage, Person |
| Audit | Service, FAQPage |
| Blog posts | Article/BlogPosting with author reference to Person, BreadcrumbList |
| Location pages | Service with areaServed (City), BreadcrumbList, FAQPage |
| Areas hub | CollectionPage or WebPage, BreadcrumbList |

## Service schema fields
- name, description, serviceType
- provider: reference to ProfessionalService
- areaServed: City objects
- hasOfferCatalog where inclusions are listed
- offers with priceSpecification only where a real published price exists

## Article schema fields
- headline (under 110 chars), description
- image, datePublished, dateModified
- author: reference to Person
- publisher: reference to ProfessionalService
- mainEntityOfPage

## FAQPage rules
- Only on pages with genuine, visible Q&A content
- Question text must match the visible page text exactly
- Never add FAQ schema to a page without visible FAQs

## Review and AggregateRating rules
- Only where genuine reviews exist
- Never self-serving fabricated ratings
- Must correspond to visible on-page reviews

## Validation checklist
- [ ] All schema validates in Rich Results Test with zero errors
- [ ] Person entity consistent across every page
- [ ] sameAs URLs all live and correct
- [ ] No LocalBusiness or PostalAddress implying a false US location
- [ ] No FAQ schema without visible FAQs
- [ ] No Review schema without real reviews
- [ ] Breadcrumbs match actual site hierarchy
