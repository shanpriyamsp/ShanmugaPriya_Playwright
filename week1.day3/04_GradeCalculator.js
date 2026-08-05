function getStudentGrade(score) {
    let grade;
    switch (true) {
        case (score >= 90 && score <= 100):
            grade = "A";
            break;
        case (score >= 80 && score < 90):
            grade = "B";
            break;
        case (score >= 70 && score < 80):
            grade = "C";
            break;
        case (score >= 60 && score < 70):
            grade = "D";
            break;
        default:
            grade = "F";
    }
    return grade;
}

console.log("Student's grade: " + getStudentGrade(85));
console.log("Student's grade: " + getStudentGrade(40));