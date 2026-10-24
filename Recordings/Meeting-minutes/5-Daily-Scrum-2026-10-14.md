# Daily Scrum Meeting – Sprint 3

---

## Meeting Information

- **Date:** October 14, 2026
- **Time:** 09:00 AM
- **Platform:** Zoom
- **Meeting Type:** Daily Scrum Meeting
- **Scrum Master:** Zohal Riaz
- **Project:** Fresh Mart – E-Commerce Grocery Shop
- **Sprint:** 3
- **Sprint Duration:** October 14–17, 2026
- **Epic:** Payment / Checkout + Orders

## Meeting Purpose

The purpose of this meeting was to review the team's progress on the first day of Sprint 3, discuss completed backend tasks, coordinate frontend development, identify challenges, and plan the next development and testing activities.

## Main Discussion

During the meeting, the team discussed:

- Starting Sprint 3 development
- Completing the checkout and order management backend
- Implementing standard and express delivery options
- Updating the Place Order and Order History APIs
- Validating checkout information and calculating order totals
- Saving orders, updating product stock, and clearing the cart
- Preventing duplicate orders and inventory conflicts
- Deploying the backend API to Render and connecting it to Supabase
- Running automated and manual backend tests
- Coordinating backend and frontend development
- Planning checkout UI development
- Preparing and submitting the Sprint 2 report

## Team Progress

### Backend Development

The backend team member, Salma Rahman, reported that the main backend tasks for Sprint 3 had been completed.

The completed work included:

- Updating the order model and serializers
- Implementing standard delivery ($2) and express delivery ($5)
- Updating the Place Order API
- Validating contact, shipping, payment, and delivery information
- Calculating delivery fees and final order totals
- Saving orders and order items
- Reducing product stock after successful orders
- Clearing the shopping cart after successful order placement
- Preventing duplicate order submissions and inventory conflicts
- Updating the Order History API to display only the current customer's orders
- Deploying the API to Render and connecting it to Supabase
- Updating and running backend tests


**Next Tasks:**

- Share the deployed API with the frontend developer
- Support frontend integration and resolve any API-related issues
- Assist with integration testing if required

### Frontend Development

The frontend team member, Faezah Ahmadi, reported that Sprint 3 frontend development had not yet started because the backend API had not been received at the time of the meeting.

The team agreed to complete and share the backend API first so the frontend could be developed according to the actual API structure, reducing integration errors.

The frontend developer also reported that the Sprint 2 report had been prepared and submitted to GitHub.

**Planned Tasks:**

- Build the contact information form
- Prefill customer account information when appropriate
- Build the shipping address form
- Display standard and express delivery options
- Build the payment information section and validation messages
- Create the order review section
- Display order totals and checkout information
- Build the order confirmation page
- Display the order number, status, and summary
- Build the order history page

## Daily Progress

| Team Area | Yesterday's Work | Today's Work | Status |
|---|---|---|---|
| Backend | Completed checkout and order backend development, deployed the API, and ran tests | Share the API and support frontend integration | Backend Completed |
| Frontend | Prepared and submitted the Sprint 2 report to GitHub | Begin checkout UI development after receiving the backend API | Awaiting Backend API |
| Testing | Completed backend automated and manual testing | Test frontend functionality and integrated features as development progresses | Integration Testing Pending |

## Sprint Progress

The project consists of four sprints, each focused on a major area of the Fresh Mart application.

| Sprint | Feature | Progress |
|---|---|---|
| Sprint 1 | Registration and Product Catalog | Completed |
| Sprint 2 | Cart Management | Completed |
| Sprint 3 | Payment, Checkout, and Orders | In Progress |
| Sprint 4 | Admin Panel | Planned |

## Challenges and Solutions

The team previously encountered frontend and backend integration errors caused by inconsistencies between the two implementations. To reduce these issues, the team agreed that the backend API should be completed and shared before frontend integration begins. The backend developer reported that the API was deployed and tested, while the frontend developer was waiting to receive it before starting the checkout interface. Integration testing will follow once the frontend is connected to the backend.

## Meeting Outcome

The backend developer reported completing and deploying the Sprint 3 backend, with all 24 automated tests passing. The frontend developer completed the Sprint 2 report and planned to begin the checkout interface after receiving the API. The next major task is to integrate the frontend with the backend and test the checkout and order functionality.

## Meeting Recording

[Watch Meeting Recording](https://drive.google.com/file/d/1TaCbb53n-jN8hiUgB18d-Bg1HITfpCYu/view?usp=drive_link)

## Next Meeting

- **Date:** October 15, 2026
- **Time:** 09:00 AM
- **Platform:** Zoom
- **Notes by:** Zohal Riaz
- **Role:** Scrum Master
