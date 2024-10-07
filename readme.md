




# VX000
- Tier-list maker
- Specifically for all media? Human-powered reviews?
- Prototype fullstack project for free-tier host-testing
- `URL`: https://determined-tranquility-production.up.railway.app/

## Action Roster
- [x] establish how to push new DB schema without overwriting the live DB data
    - Requires MySQL Worbench connection to remote DB > Right-click on `tablename` > `Table Data Export Wizard`
- [ ] determine a domain name for VX0

### Up Next

### Raw Action Inventory
- [ ] display an entire tierlist
- [ ] refactor CRUD flow
- [ ] refactor login flow
- [ ] add CreateReviewFull
- [ ] add CreateReviewStandard
- [ ] add letter grade conversion to save grade as z-score and "tyr"
- [ ] add data download option
- [ ] create backup procedure
- [ ] add a "default" page-not-found route
- [ ] add a catch-all error catcher
- [ ] change `target` to `node`
- [ ] display user's temporary alias for the tyr-card as card-title using some style to indicate that it is the temporary title, not verified/normalised against node-list
- [ ] save score as S, A, B, C, D, F, F- in db
- [ ] checklist (like a playlist but for things you suggest other's try like a bucketlist?)
- [ ] add featured to DB
- [ ] complete CRUD for nodes
- [ ] add a settings page/db
- [ ] add a `justification` attribute (1 paragraph justifying score)
- [ ] quick review
- [ ] create a (public, private, shared) option for creating reviews
- [ ] allow image upload
- [ ] create an object input UI for entering justification "meta"-data as an object (key/value pairs) like an infinite cylinder? or just a up/down arrow input
- [ ] mod review-card
- [ ] add a randomizer for placeholder values that picks things other "similar" people have rated
- [ ] mod CreateReview for moderate complexity

#### Long Term
- [ ] build business-card format for basic-reviews
- [ ] add tierlist categorization for browsing

## Notice

## Feature Wish List
- UI/UX input for describing relationships to parents, children, siblings using arrows a la (Miro / PowerPoint)
- Stats input for a `review` e.g. { spiciness: 4, salt: 3, size: 4 }

### Grades
- [ ] add a status column to grade table for tracking (recent, featured)

### Testing
- `users`
    - [ ] Create > Login
    - [ ] Login
    - [ ] Read
    - [ ] Update
    - [ ] Recover
    - [ ] Delete

## Devlog

### 10/7/2024
- [x] create scrolling-text in Tierlist

### 8/14/2024
- [x] add password reset using SendGrid

### 8/12/2024
- [x] Stop tracking .env.development and .env.production

```s
$ git rm --cached .env.development .env.production
$ git commit -m "Stop tracking .env.development and .env.production"
```

### 7/26/2024
- [x] remove "create basic-review form" from landing

### 7/25/2024
- [x] complete all CRUD for reviews

### 7/22/2024
- [ ] implement letter grade
- [ ] complete CRUD operations for reviews
    - [ ] create (functional)

### 7/18/2024
- [x] Start working on card design?
- [x] fix small form-factor IconNavHeader

### 7/17/2024
- [x] change IconNavHeader login-button to logout-button after login
- [x] refactor landing page with a most recent review-card

### 7/??/2024*
- [x] change grades to reviews, targets to nodes

### 7/13/2024
- [x] update mysql naming

### 7/7/2024
- [X] use jwt for authorization
- [x] add user creation with basic-auth

### 7/3/2024
- [x] add rating table to database
- [x] move routes to own module
- [x] refactor model names to singular per convention

### 7/2/2024
- [x] test client on railway
- [x] host entire project on railway.com

### 7/1/2024
- [x] add Target input-form
- [x] add Target delete-form

### 6/29/2024
- [x] add Target table, model

### 6/28/2024
- [x] refactor to dedicate files for: (a) models and (b) db config
- [x] use init vs define for Models

### 6/27/2026
- [x] create initial routes

### 6/26/2026
- [x] restructure monorepo for backend and frontend
- [x] initialize frontend with vite
- [x] wire frontend, backend, db

### 6/25/2024
- [x] `0.0.2`: Implement local, hidden `.env`
- [x] `0.0.1`: Initially connected to DB by creating an "API User" called `caller` with limited permissions
    - (!!!) Allowed to access DB from anywhere (`%`)
    - Stored independent `index-001.js` outside of `Git` since it contained passwords
- [x] test db connection
- [x] define, add model; create a user
    - user-creation was hardcoded for testing
- [x] create a GET route

### ???
- [x] add CreateReviewBasic



## AI Boilerplate

```
I am using PaaS Railway to host my first SPA.  This is a learning experience for me.  I am using MySQL, Sequelize, Node.js, express, axios, and React.

I need to create a scrolling-text/ticker-tape component "ScrollingText" that acts like an LED stock-ticker that wraps around a building.  It should pause for about 5 seconds at the beginning, scroll text to the left, show a small gap followed by the beginning of the text again, and once the beginning of the text reaches its initial starting point, start the cycle all over with another 5 second pause.  I will be displaying a dynamic number of these components on the page differentiated by an integer-prop called `index`.  I want #0 to start scrolling 5 seconds after loading, #1 to start 10 seconds after loading, #2 @ 15sec, #3 @ 20sec, ... Essentially starting the process for each component with an offset in time of about 5 seconds.
```

Calling Component
```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ScrollingText from './ScrollingText';
import '../styles/normalize.css';
import '../styles/global.css';

const apiUrl = import.meta.env.VITE_API_URL;

const TierList = ({ tierlistName }) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    //   const tiers = ['S', 'A', 'B', 'C', 'D', 'E', 'F'];
    const tiers = ['S', 'A', 'B', 'C'];

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${apiUrl}/v1/api/reviews?tierlist=${tierlistName}`);
                setReviews(Array.isArray(response.data) ? response.data : []);
                setError(null);
            } catch (error) {
                console.error('Error fetching reviews:', error);
                setError('Failed to fetch reviews. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchReviews();
    }, [tierlistName]);

    const getTierReviews = (tier) => {
        return reviews.filter(review => review.tier === tier);
    };

    const renderTierItems = (tier) => {
        const tierReviews = getTierReviews(tier);
        console.log("Tier Reviews:", reviews);
        return tierReviews.slice(0, 5).map( (review, i) => (
            <div key={review.review_id} className="tier-item">
                <ScrollingText
                    className="item-name"
                    text={`${review.item} - ${review.details}`}
                    initialPauseSeconds={4}
                    scrollSpeed={0.5}
                    index={i}
                    timeOffset={5}
                />
                {/* {review.brief && <span className="item-brief"> - {review.brief}</span>} */}
            </div>
        ));
    };

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="tierlist">
            <span className="tierlist-title">{tierlistName} </span>
            <span className='tierlist-subtitle'>by Joel Cruz</span>
            <div className="tierlist-grid">
                {tiers.map(tier => (
                    <React.Fragment key={tier}>
                        <div className={`tier-letter tier-${tier.toLowerCase()}`}>{tier}</div>
                        <div className={`tier-items--${tier.toLowerCase()}`}>
                            {renderTierItems(tier)}
                            {getTierReviews(tier).length > 5 && (
                                <div className="more-items">
                                    +{getTierReviews(tier).length - 5} more items
                                </div>
                            )}
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default TierList;
```

First Attempt
```

```

- I'm creating a SPA using MySQL, Node.js, and React.  I need to add another column to my reviews table that will hold either public, private, or shared.  Public means anyone with link can see.  Private means only creator can see.  Shared means only a subset of signed-in users, explicitly selected by the creator of the review, can see.  I'm guessing that ultimately the creator can create a list per review and maybe the creator can make a "playlist" of users (e.g. work, family, kids)  (1) What should I call this column?, (2) What datatype and attributes should it have?, (3) What additional column(s) might I need to add to manage the public, private, shared options [e.g. I have the following tables users, reviews, and nodes (officially created items to be reviewed)] (4) Might I need a new table (e.g. a linking table)? (I don't know the jargon for this in database "world".



## Notes

### Reset password Notes
1. add `resetToken`, `resetTokenExpiry` to DB, models
    - [x] update MySQL
    - [x] update API DB model
    - [x] add new API route(s)
1. integrate sendgrid
1. create the reset-routes
1. create the email utility file for `sendResetEmail()`
1. add `ResetEmail` React-component(s)



## Design Whiteboard
- `tier`: S, A, B, C, D, E, F
- `score`: as in z-score (e.g. -3, -2, -1, 0, 1, 2, 3)
    - `decimal` (-3.9 - 3.9)
- `SendGrid Justification`: Selecting SendGrid as transactional email service provider for things like password reset because of the permanent 100 emails/day free-tier
- Using monorepo for simplicity
> [!!!] Double-check that `_id` and `_fk` table-comlumns in DB are `unsigned` (UN)



## Database Backup

### TL;DR
- Open `MySQL Workbench`
- Open/create connection to database on `Railway`
- Open target database
- Right-click on a `tablename` > `Table Data Export Wizard` > Follow instructions
- (OPTIONAL ATTEMPT) Enter the following `SQL` into `Query`-tab
    ```sql
    SELECT * FROM tablename
    INTO OUTFILE 'local\path\tablename-20240814.csv'
    FIELDS TERMINATED BY ','
    ENCLOSED BY '"'
    LINES TERMINATED BY '\n';
    ```


