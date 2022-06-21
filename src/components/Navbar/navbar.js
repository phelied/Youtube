import React, { useState } from "react";
import './navbar.css';

const openNav = () => {
    document.getElementById("mySidenav").style.width = "100%";
}
/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
}

const Navbar = () => {
    const [sideBar, setSideBar] = useState(false)

    return (
        <div>
            <div id="mySidenav" className="sidenav">
                <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
                <div className="sidebar_categories">
                    <div className="sidebar_sub_categories">
                        <div className="title_sub_categories">
                            <span>Menu</span>
                        </div>
                        <ul>
                            <li>
                                <img alt="home-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABwElEQVRYhe2Wz0obURjFz+kNJOJ0Ke5cVjEBu+gj1OImSCbJdeNGoS7durFQSl+gm+4krkq4NwpZFLSLkgdQgmKhIugrdBFFApmvGwPWGc2dSVI3c3bz3fud84M79w+QaggZY2br9fqrYTxeDBG+QfJUKfXLWruV1IdxG2q1Ws7zvK8A1v4xIr9ls9n3xWLxZmwAxpgZknsA3kSNi8iJUsovl8uXrp7OS2CMWSLZfiwcAEguBEHQttYuu/qqQRNEhIVCYYvkDoBJB88sgBWt9UQ+n//ZarXkqclPLkGz2XzZ7XZ3AfgOwVH6nslkVkul0p/YAMaYWZL7AOYThvd1oZTyfd8/cwa4W28LwBsyvK+OiFS11gcDARqNxpyItAHkRhTe162IvNZan98vhnaBiGyPIRwAciS3HxajtuHiGML7eusCMDVGgGkXgNjHcwyFvBNfRqNSCpBJ2NcD8ANA5+7bA/AODnfLqAA+VqvVz/cL1toPAD7FNUq6BOcRtd9JjJ79H0gBUoAogKtBTSISevWSHNgHINQXOgdIlgFsikjUA7QnIoda6+OHA5VK5chau45HDiSS10EQfHGATPV/9RdsAXpcxKoyHQAAAABJRU5ErkJggg==" />
                                <span>Home</span>
                            </li>
                            <li>
                                <img alt="discover-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACzElEQVRIie2WO2gUURSG/zO7W4QkXUCMS1AiIU0qbe1EjAET2czA+FgUC618kcTKhMRGiIIIFoqFJsrCnRkkL1TQSmwtTGEXAsak2SoxbDM7v4U7MDs7szNZJFX+7px7zv3Ombkv4ED7JEkbqJTqEZFhkkMichRAvja0QXIdwHK1Wl0wTfPXfwErpY5omjZJ8jqATEK4B8BxXXfCNM31lsG2bY+QnAfQkVRgSDskLxuGsRgXoMUNKKVuk3RagAJAp4i8t237VlxAZMe1Tp1mhaWUR/JCVOcNYMdx8p7n/URrnQLAKoDPAO7W7B3XdftN09wMBjV05HneTIvQTZI3SJ4EcDrg78xms9Ph4DqwUqoHQHGPwF0A05VKpc8wjJcArgAYCMVccxwnH3Rk66rQtBGSSVvGlyci70TkfqFQ2KoV3iEiDyNiMySHATyPBJMcTEMk+QnAuK7rq0G/iIwBOBxZpeediwUDOJ6C+9EwjIYCS6VSN4CxuCQR6Q3a4cV1KAFaJTkBAJZlfbMs66s/kMvlZgC0N8ntDhrhjptKRF4HPq8HgACglBogeXUvc9WBRWSLZGdM7B8ReeAbuq6fCuQ9RvI5/jsWTHINQF9M4hN/9fpSSg0AmAVwJgHqzx0LXhGRsxF5m5VKZdY3SqVSdy6Xm0p5Y/lajgVXq9WFbDb7NDwZyclisbg7NzfX3tbWNg5gjGSzhRSWm8lkloKOhrPatu1XtU58/ejq6jpRLpcvAniEmH2aoBe6rt8MOqLO6ikAOwHXl3K5/B3Amxah25qmNZzVkdeiZVmDAJaQ/v/FyRORkdHR0aXwQOR9q+v6BxG5h397tWUogDtRUCDh6aOUOi8ibwHE7e04bQO4pOv6clxA0xeGYRiLJHsBPAPgpgB6IjKvaVp/Myiwh+et4zh5ksMkhwAcQ/3zdk1EVjRNWywUChtp5zzQvugvceIVMP4mlmAAAAAASUVORK5CYII=" />
                                <span>Discover</span>
                            </li>
                            <li>
                                <img alt="like-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABYElEQVRIie2Tv0vDUBSFz3lv0kn/CqdSFwd1chJRUPsegW466CyI/iNOouge6Cro5KagKPhjclGn6lQRpEP7roNJSF/btE0nod+Ue/kuJwkcYEQPGD+EYThF8hTAtIicaa13ms3mAclFEblTSm1aa196uQDuSW7ErkqS/g5mAYyRNM65B5Jr0TwvIkcp96SbC2DOOXccu0kAgIL3dZPeXOzXJZm46YALZEDyPH4WkUwXQOImAY1GYxfAZ5eDqnNuPx601lnuh4jstQWUy+VXpdQKgB/voK6UWg+C4D1eGGPeSC53ckWkxU3/IhhjbqKQr2hVA7BkjLn2X9Naexu5tWj1DWA1CIKrtEf/EADCMCyQPCS5Za197uT4rtZ6u1QqPWW5/5NcTR6ErCY/dmtyrgC0t3PCm4vIQa4m5woYpMmD0NKDSqUy45y7BDCeWteVUgudytYPuZvcL0M3ecTQ/AJTKqU7mueiiwAAAABJRU5ErkJggg==" />
                                <span>Likes</span>
                            </li>
                            <li>
                                <img alt="podcast-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABeUlEQVRIie2VsWtTYRTFf/ehby08AjXt1G4dhYLQ6p/gEvK+zTqVQHejDragdcji5hC6NZBCvhcoNn9CcenQsX9AIYhDyKzkOw4+QcKLeS2FIuRs3+Gec+4d7v3gf4eVKer1erGZfQBeAAI6kvadcz/maR+U6sLsPdD8i3ptZgBv5mmjMgHATgH3soywbEC1gHt0lwG3xiLg/gMK98B7fwqsjkajrUaj8RMYAitTZUOAdrv9MEmSr8B1mqa1aa9ZE6wBm0mSbOfvznSBmR0DVCqVp8CmpPUio1kBAwBJrySZpH2glXc9BFohhANJFkJo5oFfiowKb1G/36+GEK6AJeAwTdN30zWSLMuyj8BbYCxpwzn3rVQAQJZlTtJJPuUgiqJPk8nkIu/2CXAAPAOCmbl6vd4vPcEfeO9T4CifpAhjSbvOuWyWx9xz3e12l+M43pP0HHic05dmdhZF0edarfZ9nkdpeO/lvddNNPezaP/AOb9/tAXuDr8Aprl3nDHmt10AAAAASUVORK5CYII=" />
                                <span>Podcast</span>
                            </li>
                            <li>
                                <img alt="radio-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAFNElEQVRIicWWXWxURRSAv3O3LYuosaVqBIREAxhCoqJGH4SkCglGpZB7d2yT+kNQQlSi8Q9/EizyhCQaqz5UTXiAhjJ3F7rEP2KKYPlRjOCDICoxMQWiJqIIKNvtzvGhs7jdbQsYEk9yM/eeOXO+OTPnzFz4n0TO1dBaO1VE5gNzgPHA1b6rV1UPi8gnhUKhq6mp6fsLAk6n0zer6irgjnOcY7eqLjPGfPWfwO3t7dV1dXWvA496u2Missk5txn47vTp04cBksnkBBG5DpgHzAfqAAXeqq+vf6qhoaH/nMEdHR211dXVGRFpAP4CXsvlcqtbWlr+HCmKdevWXZpMJp9T1aeA0UB3VVVVtGDBgj/OCm5vb6+ura3dIiINItILNEZRtA/AWjtHRAwwE5jgh/QCPcCGVCrV7e1uEpEub9NdX18/tzzyCnAcx28Bj4lIbz6fv625ufloZ2fnlCAI3hWRWSNFDGxT1UeMMYfWr18/rqqq6gsPb0ulUk8MC/aJtAf4W0Ruj6JoXyaTmeWc6wJqgV+AtkQi8cHJkycPASSTycnA3SKyFLgSOKaqjcaYHZlMZoZzbgcwKgiCW8Iw3FtkVZWCffYK8FoURfs6OzunFKEissE597Ax5mRZlF8DX2ez2ba+vr73ACMiWWvtrWEY7o3j+HXgxUKhsIqBUgQgKL5Ya6cyUDLHcrncaoAgCN4tQsMwbB4CekYaGxtPRFHUBMQMZPY7PphXgd9FZHY6nZ5cAfaHA0BXS0vLnz6RZgG/OOceFhEdDlriQ2tqahYBv4pIQxzHdxpjjotIFsA5V2T8u9SqOltEADZ7J8Z3tZVGaq2tEZGVwP0M1OtaVV1ujOkrRh7H8ZvASu+j2zm3WUQeEpE5wOpBEQdBMBGgUCh861Uz/QTeL4vqFeA54CpgHLDM686Iqr7v22IVHPDtxDO8EuNxfgJHvWq8X54fy1b0ASrlwbLvQ74t1vqRUp+DwPhlP3XqVLHQFWDUqFHltT7UXhdKP/r6+op+HcDo0aNdOa8UfAxgzJgxV5TOslAoXFMGWVtOFZFBumQyea3XH/ETubyUMQisqge88Y1e1ePB80qdqupyYBVw1D+rnHMvl9o45+71tp/5tuizuNf/ZrWI7ARmA3OBrKp2isgjwFJrbZsx5jiAz97n/VMhmzZtuqy/v38pQBAEG7z6Lt/uqohYRGL/aqy1FxtjtgJbgctFZE1ra2vptgwpra2tQT6fXwPUA91hGH6azWYvUVUDUCgUbEXEURTtj+O4B5gpIk8DK0RkiaruBhZMnz79PmD9SHU8bdq0lD+IflPVJQD5fP4Z4DJgW1NTU7FUByUXqvqid/bCxo0br4+i6IcgCBpVtau/v3+PX5lh6ziRSHypql3APGPMoUwmM0NVl3mfL5WyRrwWRWRmGIY/lfUf9dBS+TmVSg3SZTKZCf5mmiQib0RR9GRpf8W+qeqzwA5Vvdo5t91ae0OZyZjyMcBFZdAZzrmdwCRg+4kTJyoSsQJsjPlbVe9R1Z1+tp+n0+kV1toab3JwCPBBGPh7SafTK5xzuxg4Hntyudy8hQsXnj4r2MOPM3BFvg3UqOpyESkeld8MMeQbgLFjxy7ydV4NvKmqs4f7T6saSunhfcDj1toOEWkOguBjAFXd72+xM6Kq+wGccx+KyNuq2mGM2T2cbziPH/qiWGvnishHg5yIzI2iaMv5+DnroVAuiUSiYqmdc0Mt/4UFh2F4GDhc/BaRXmPMkRGGXBiwl8W+znudc4v/i4N/AObkQDwmSd60AAAAAElFTkSuQmCC" />
                                <span>Radio</span>
                            </li>
                            <li>
                                <img alt="profile-icon" src="data:image/png;base64,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" />
                                <span>Profile</span>
                            </li>
                        </ul>
                    </div>
                    <div className="sidebar_sub_categories">
                        <div className="title_sub_categories">
                            <span>Collection</span>
                        </div>
                        <ul>
                            <li>
                                <img alt="favorite-songs-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAB5ElEQVRIie3VQWsTQRTA8f/b5CoeRP0aHnoQ0ZKLBz1usgPmGwitNaigUjQXQfCgFG+CRUGQzSR6KfRYBK0Inmq+hJqCGAhxyTwPJpKknU3SZi+l7zb73r7fvF2YgeM46iG+RK1WuwAsAYvAaeA7sKWqz4wxX4drrbULqnoTKAxqReSDc+65MWZ7KjiO45yIPAWWPXtywONSqbTaRx8Bdz1DqIisOeduGWN6w4n8np2kowABcN9ae0JEhH9fxReiqisiokBlJDG8qNfr551znzy7P1QEQXCxWCx+/L8eTjrnVrJA+72vj2xkLH8pCxRARBbT4DNZwap6Ng3+nRU83nscbmYIf/PCqvo+Q3ik9wicz+dfAd0M0D+q+sYLh2HYAl5nAK8bY354YYBcLncPaM0R3U2SZHX84R64P/WdOcKVcrn8cyIMEEXROvByDuiLKIr2/XX7wgCquqSqnw+Bbrfb7Ru+ZOq5HMfxSRHZAs7NiO6oasEYs+sr8E4MYIz5FQTBVWY7WHaSJLmchsKUN1Gj0TjV6/U2gYUJpV9U9cokFCZMPIgwDFudTqcAvEsp2+h2uxMnHcRMd6+qirX2IfBg7N21ZrNZqVarbtpeB7r0rbXXVPVJf3k7iqK3B+lzHEc7/gLWeK2Za07oMwAAAABJRU5ErkJggg==" />
                                <span>Favorite Songs</span>
                            </li>
                            <li>
                                <img alt="artists-icon" src="data:image/png;base64,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" />
                                <span>Artists</span>
                            </li>
                            <li>
                                <img alt="albums-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAB8ElEQVRIieVTMYsTURiceUQFO8VTQcROMaY78Qin/gNFyb7XpLE5UTzQ9rqz0B8gCAau0wN5m0Q8awmIiAQtN/aKcHARa0N2x+YS9uLu7QYr8YOFj5lvZvZ9jwf8VxWG4eMwDB/No2HZQe99neQHADDG1BuNxscyOlM2wBizOumTJFndbzZdpU7Q7XaPx3H8FcChXWgk6Yxzbrvwx8oEjMfjOylzADhIcqWMtjCg1+tVSN7OoO62Wq0DRfrpirz3p4wxVyUdA7AAYEHSSZKnASzm6D9L+kZyG8AOgB2SwyRJ3jnnvgNAZZpEvpV0bk86C69okeSecEkwxnwBUAVSKyL5qshtjno9aaYBQRCsSXoAIPkLYwF4GATB2gT4Ywfe+5skXwA4PKf5LwC3rLUv02Dmkr33l0huAThR0vyHpBvOufezRO4tttvta5K2yriTvB4EwZssLvcdSKqVMQeAJEku5HH7PbTlsgEkc2czAyQRQL1sAIDl9fX1TK9MsNPpVAEcnYGHAFZ2v+EMd6RWq50vHQDgSqoXyeeSqtbaDWvtxmg0OgvgCYB4OiRdzjKqZIGSJsGfJN2z1vbTfLPZ/Angvvd+k+RTABdTmuITRFH0LI7jahRFS865ftYMADjn+lEULcVxXB0MBq28uX+7fgNOjqwUrtS1NQAAAABJRU5ErkJggg==" />
                                <span>Albums</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <span onClick={openNav}>&#9776; open</span>
            <div id="main">
                <h2>Sidenav Push Example</h2>
            </div>
        </div>
    )
}

export default Navbar;