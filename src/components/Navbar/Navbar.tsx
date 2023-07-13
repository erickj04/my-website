import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import NAV from '../../statics/Nav';
import {
    AppBar,
    Toolbar,
  } from '@mui/material';
import './Navbar.css';
import { motion } from 'framer-motion';

const svgVariants = {
    hidden: { rotate: -180 },
    visible: {
        rotate: 0,
        transition: { duration: 1 }
    }
}

const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            ease: "easeInOut"
        }
    }
}


const Navbar: React.FC<{}> = () => {
    const location = useLocation();
    
    const pageLinks = NAV.map(({ TITLE, REF }) => {
        let active = REF === location.pathname ? 'active' : '';

        return (
            <React.Fragment>
                <Link className={`nav-links ${active}`} to={REF}>{TITLE}</Link>
            </React.Fragment>
        )
    })
    return (
        <div className="nav">
            <div className="navbar-menu">
                <AppBar position="sticky" sx={{ bgcolor: "white"}}> 
                    <Toolbar className="navbar-toolbar">
                    <motion.svg width="65" viewBox="0 0 1640.000000 2360.000000"
 preserveAspectRatio="xMidYMid meet"
 variants={svgVariants}
 initial="hidden"
 animate="visible">
<motion.path d="M14240 19734 c-25 -25 -54 -50 -65 -54 -11 -5 -358 -329 -771 -722
-3279 -3116 -4658 -4423 -4669 -4423 -7 0 -34 -11 -61 -23 l-49 -23 -2 -762
c0 -419 -4 -773 -7 -787 -3 -14 -9 -37 -12 -52 -9 -41 2 -73 32 -87 22 -10 31
-9 52 5 13 9 628 614 1366 1344 1221 1209 3423 3345 3464 3362 9 3 141 130
292 282 193 194 281 276 297 276 25 0 39 15 23 25 -12 7 1418 1455 1438 1455
6 0 12 6 12 13 0 8 9 22 20 32 23 21 24 35 9 122 l-11 63 -657 0 -657 0 -44
-46z"
transform="translate(0.000000,2360.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none"
variants={pathVariants}/>
<motion.path d="M9272 19763 l-704 -3 6 -902 c3 -495 8 -903 10 -906 3 -2 26 3 52 12
25 8 50 13 55 11 4 -3 11 1 16 8 7 12 225 17 1331 32 1255 16 1324 16 1342 0
24 -22 65 -22 89 -1 9 9 27 16 39 16 19 0 78 62 161 170 13 17 42 38 64 47 28
12 213 177 616 551 537 498 652 612 725 719 16 24 71 90 122 148 l94 105
-1657 -2 c-912 -2 -1975 -4 -2361 -5z" variants={pathVariants}
transform="translate(0.000000,2360.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none"/>
<motion.path d="M4803 19753 c-904 -2 -1643 -6 -1643 -11 0 -32 233 -267 840 -848
699 -669 849 -818 850 -841 0 -11 22 -28 109 -85 36 -23 78 -22 93 2 13 20 24
20 1385 20 909 0 1373 -3 1373 -10 0 -17 36 -11 55 10 10 11 26 20 35 20 16 0
18 19 24 203 3 111 8 505 11 875 l6 672 -748 -2 c-411 -2 -1487 -4 -2390 -5z" variants={pathVariants} transform="translate(0.000000,2360.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none"/>
<motion.path d="M987 19733 c-4 -3 -7 -18 -7 -33 0 -21 -7 -28 -32 -35 -36 -11 -55
-47 -45 -86 7 -27 -26 6 1315 -1315 524 -516 965 -944 980 -951 37 -17 508
-482 516 -511 4 -12 22 -28 39 -36 36 -15 1910 -1837 1944 -1890 26 -39 836
-818 862 -827 9 -4 57 -49 105 -100 48 -52 317 -315 599 -585 471 -452 514
-490 535 -481 19 9 28 6 56 -22 l34 -33 7 48 c4 27 11 62 16 78 5 17 5 34 0
40 -5 6 -5 60 1 126 6 66 8 377 5 730 l-4 615 -1924 1772 c-1058 975 -1951
1801 -1985 1836 -33 35 -67 66 -75 69 -15 6 -1543 1410 -1664 1529 l-70 69
-601 0 c-330 0 -604 -3 -607 -7z" variants={pathVariants} transform="translate(0.000000,2360.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none"/>
<motion.path d="M918 17982 c4 -997 37 -10689 37 -10951 l0 -243 40 -34 40 -34 245 0 c255 0 5794 55 6308 63 161 3 295 7 298 10 8 8 12 258 14 898 l2 616 -26 26
c-14 14 -26 30 -26 35 0 4 -19 17 -42 27 -41 18 -129 18 -2830 12 l-2788 -6 0
452 c0 447 45 3278 56 3515 l6 122 1392 0 c1758 1 3341 -17 3373 -36 26 -16
69 -18 78 -4 3 6 20 10 37 10 l31 0 -21 23 c-14 15 -22 36 -22 57 0 32 -51 85
-752 790 -626 628 -758 755 -783 758 -16 1 -701 -18 -1521 -43 -820 -25 -1570
-45 -1667 -45 l-177 0 5 688 c6 796 31 2128 45 2381 8 140 7 178 -4 200 -8 14
-17 45 -21 68 -5 33 -14 46 -38 61 -18 11 -169 151 -337 313 -168 161 -319
305 -335 320 -102 94 -405 398 -405 406 0 6 -6 16 -14 22 -8 7 -17 30 -21 52
-9 52 -33 66 -115 68 l-65 1 3 -598z" variants={pathVariants} transform="translate(0.000000,2360.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none"/>
<motion.path d="M15543 18563 c-31 -6 -1002 -942 -1028 -990 -12 -22 -54 -64 -102
-101 l-83 -63 0 32 0 33 -65 -64 c-54 -53 -65 -70 -65 -97 0 -18 -4 -33 -10
-33 -5 0 -10 -10 -10 -23 0 -13 -11 -34 -25 -47 -32 -30 -31 -42 5 -83 l29
-34 -20 -694 c-20 -641 -20 -696 -5 -722 15 -26 17 -269 26 -2705 5 -1473 11
-3101 14 -3619 l5 -943 -2709 0 c-1863 0 -2717 -3 -2736 -10 -23 -9 -33 -7
-57 11 -21 15 -32 18 -40 10 -6 -6 -19 -11 -29 -11 -15 0 -18 -9 -18 -52 0
-67 9 -98 26 -98 12 0 14 -85 14 -529 0 -453 2 -530 15 -541 23 -19 27 -64 18
-218 -5 -79 -6 -145 -3 -147 3 -2 1490 7 3305 21 2788 20 3314 26 3390 39 50
8 111 17 138 20 l48 6 -1 5446 c-1 3842 2 5449 9 5456 7 7 11 116 11 323 0
198 4 315 10 319 6 3 10 17 10 31 0 13 5 24 10 24 6 0 10 11 10 25 0 18 -5 25
-19 25 -11 0 -25 2 -33 4 -7 2 -23 1 -35 -1z" variants={pathVariants} transform="translate(0.000000,2360.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none"/>
</motion.svg>

                            {pageLinks}
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    )
}

export default Navbar;