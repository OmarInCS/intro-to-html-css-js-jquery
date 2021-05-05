
function getPercentage(mark, fullMark) {
    return mark / fullMark * 100;
}

function getGrade(pct) {
    if (pct > 85) {
        return "Excellent";
    }
    else if (pct > 75) {
        return "V. Good";
    }
    else if (pct > 65) {
        return "Good";
    }
    else if (pct >= 50) {
        return "Pass";
    }
    else {
        return "Fail";
    }
}