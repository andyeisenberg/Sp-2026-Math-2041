var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "syllabus",
  "level": "1",
  "url": "syllabus.html",
  "type": "Section",
  "number": "",
  "title": "Syllabus",
  "body": " Syllabus        Course Information     Day and Time  Lectures: TR 3:30 pm - 4:50 pm Gladfelter L013    Recitation  Section 1: M 12:00 pm - 12:50 pm Wachman 15  Section 2: W 12:00 pm - 12:50 pm Wachman 9  Section 3: F 12:00 pm - 12:50 pm Wachman 9    Office Hours  See times and location on Canvas.    Course Goals  To help prepare students learn basic concepts, techniques, and applications of ordinary differential equations.    Topics Covered  First order ordinary differential equations, linear second order ordinary differential equations, the Laplace transform, and possibly more as time permits.    Prerequisite  Math 1042 with a grade of C or better, or equivalent transfer credit.    Course Mode  In-person    Credits  3       Textbook and Other Required Materials     Textbook  We will use Notes on Diffy Qs , by Jiri Lebl, which is freely available.    Phone  You will need a device (phone or tablet) to take pictures of your quizzes\/tests and upload your work.       Assessments   Homework  There will be homework assignments throughout the course. The homework will be graded for completion. Doing homework problems is the primary way that you will learn and internalize the material seen in class. Plan to spend a substantial amount of time throughout the semester doing homework problems.    Quizzes  There will be in-class quizzes every other week (on Jan 20, Feb 3, Mar 10, Mar 24, and Apr 21). Quizzes give you some practice in a test-like environment without the same grade pressure as a test. The quizzes should be a signal to you about whether you're keeping up with the pace of the course.    Exams  This course will have two midterm exams and a Final Exam. Exams are the main opportunity for you to demonstrate your understanding of course material.     Test 1  Tuesday, February 17 (in class)    Test 2  Tuesday, April 7 (in class)    Final Exam  Tuesday, May 5, 1:00 pm - 3:00 pm       Makeup Policy  There are no quiz or exam makeups. The lowest quiz will be dropped and replaced with the recitation score.     Grading  The grade components and their weights are:    Component  Weight    Homework  5%    Quizzes  15%    Exam 1  24%    Exam 2  24%    Final Exam  32%    The lower cutoff for each letter grade is given in the table below.     Letter Grade  Lower Cutoff    A  93%    A-  90%    B+  87%    B  83%    B-  80%    C+  77%    C  73%    C-  70%    D+  65%    D  55%    F  0%     Attendance Policy  Attendance is expected and will be recorded. If you need to miss a class for some reason, it is your responsibility to get notes from another student for any material you've missed, and to arrange to turn in\/make up any in-class or collected work.    Attendance and Your Health  To achieve course learning goals, students must attend and participate in classes, according to the course requirements. However, if you have tested positive for or are experiencing symptoms of a contagious illness, you should not come to campus or attend in-person classes or activities. It is the student’s responsibility to contact me to create a plan for participation and engagement in the course as soon as you are able to do so, and to make a plan to complete all assignments in a timely fashion.    Expectations for Class Conduct  It is important to foster a respectful and productive learning environment that includes all students in our diverse community of learners. Our differences, some of which are outlined in the University's nondiscrimination statement, will add richness to this learning experience. Therefore, all opinions and experiences, no matter how different or controversial they may be perceived, must be respected in the tolerant spirit of academic discourse.    Disability Statement  Any student who has a need for accommodations based on the impact of a documented disability or medical condition should contact Disability Resources and Services (DRS) in Howard Gittis Student Center South, Rm 420 ( drs@temple.edu ; 215-204-1280) to request accommodations and learn more about the resources available to you. If you have a DRS accommodation letter to share with me, or you would like to discuss your accommodations, please contact me as soon as practical. I will work with you and with DRS to coordinate reasonable accommodations for all students with documented disabilities. All discussions related to your accommodations will be confidential.    Academic Freedom  Freedom to teach and freedom to learn are inseparable facets of academic freedom. The University has adopted a policy on Student and Faculty Academic Rights and Responsibilities (Policy # 03.70.02) which can be accessed here .    Add\/Drop Policy  Students will be charged for a course unless dropped by the Drop\/Add deadline date. Check the University calendar for exact dates.  During the Drop\/Add period, students may drop a course with no record of the class appearing on their transcript. Students are not financially responsible for any courses dropped during this period. In the following weeks prior to or on the withdrawal date students may withdraw from a course with the grade of \"W\" appearing on their transcript. After the withdrawal date students may not withdraw from courses. Check the University calendar for exact dates. See the full policy by clicking here .    AI Policy  The use of generative AI tools (such as ChatGPT, DALL-E, etc.) is not permitted in this class unless specifically announced for a particular assignment; therefore, any use of AI tools for work in this class may be considered a violation of Temple University's Academic Honesty policy and Student Conduct Code, since the work is not your own. The use of unauthorized AI tools will result in a grade of zero on the assignment; a second offense will be reported to the Student Conduct Board.    Incomplete Grades  The grade \"I\" (an \"incomplete\") is only given if students cannot complete the course work due to circumstances beyond their control. It is necessary for the student to have completed the majority of the course work with a passing average and to sign an incomplete contract which clearly states what is left for the student to do and the deadline by which the work must be completed. The incomplete contract must also include a default grade that will be used in case the \"I\" grade is not resolved by the agreed deadline. See the full policy by clicking here .    Student Support Services  The following academic support services are available to students:      The Math Consulting Center      Student Success Center      University Libraries      Undergraduate Research Support      Career Center      Tuttleman Counseling Services      Disability Resources and Services      If you are experiencing food insecurity or financial struggles, Temple provides resources and support. Notably, the Temple University Cherry Pantry and the Temple University Emergency Student Aid Program are in operation as well as a variety of resources from the Division of Student Affairs.    "
},
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Section",
  "number": "",
  "title": "Week 1",
  "body": " Week 1   This is an outline of the topics we covered in the first week of class.    Tuesday 1\/13   Ch 0: Introduction    A population changes over time. Let be the population at time . Each year, some proportion ( ) produce offspring and some proportion ( ) dies. So: where .    The equation is called a differential equation (DE) , an equation which relates a function to one or more of its own derivatives.    A solution to a DE is a function that satisfies the DE.      Given , let . Then , so this is a solution to the DE.  Are there others? Can we find another solution? Can we find all solutions? Consider the following calculation: So is the general solution to the DE.  Notice the sloppiness with the constant of integration above. This sort of thing will be typical.    So solutions to a DE are not unique. However, if we specify initial conditions (IC) , we can identify a particular solution of interest. The IC takes the form of a single point of our unknown function.    Suppose and . We know that is the general solution to the DE. Plugging in the IC: so is the particular population function we're interested in.    A DE together with an IC is called an initial value problem (IVP) .    Sec 1.2: Slope Fields  A 1st order DE has the form , where is some expression in terms of and . In this case, gives the slope of the tangent line to the graph of at any point in the -plane.    Suppose an object falls subject to gravity and air resistance (which we'll assume is proportional to velocity). Then: where is the gravitational constant, is the drag coefficient, and is the mass. For a more specific example, suppose . Then, at various points in the -plane, we know that a solution function passing through that point must do so with slope . We can draw many sample slopes to get a slope field , which gives a sense of the shape of solution curves (aka integral curves ):   Slope field for a first order DE.    Slope field for showing several approximate solution curves.         Picard's Theorem   Given an IVP , if is continuous and exists and is continuous near , then a solution to the IVP exists and is unique in an interval.    The symbol is called a partial derivative . Since Calc III is not prerequisite to this course, I'll just say that, for our purposes, the idea of partial derivatives is: when a function has multiple variables, partial derivatives treat all but one variable as constant. For example, if , then:      Thursday 1\/15   Existence and Uniqueness  Recall from last time. Let's see an example.    Consider . Then . Both are continuous when .   Three possible initial condition points.    In the -plane, the upper half plane is shaded. A point labeled is in the upper half plane, with strictly positive -value. A point labeled lies on the -axis. A point labeled is in the unshaded region below the -axis.      The theorem clearly does not apply at the initial condition point . At this point, , so the functions are not defined.  At , , so both exist. More importantly, we can draw a small circle around that point, and are continuous in the entire circle (aka, \"near\" ). So the theorem applies at .  At , both exist. However, any circle around includes points where don't exist. So the theorem doesn't apply at .    Notation: for brevity, we can write .    Separable Equations    A DE is separable if it can be written in the form:     In this case: Question: Is it okay to separate the differentials like this? To integrate each side?  Justification: (Note the -substitution moving from line 3 to line 4.)  We don't need to reshow this justification every time we separate variables. But now we see that it's not shenanigans or a magic trick, it's just the Chain Rule.    Solve . This is an implicit solution to the DE.      Solve . However, moving from line 2 to line 3, we divided by . This assumed that . Looking back at the DE, it seems that  is a solution. So we must remember to include it when we write the general solution.      First Order Linear    A DE which can be put in the form is called a first order linear equation .    Idea: to solve these DEs, we notice that the LHS almost looks like a derivative taken via the Product Rule. Can we find a factor function to multiply both sides of the DE to get: If so, then: This function is called an integrating factor .           Solve . Applying the IC :       "
},
{
  "id": "subsubsec-Introduction-2",
  "level": "2",
  "url": "notes-week-01.html#subsubsec-Introduction-2",
  "type": "Example",
  "number": "1",
  "title": "",
  "body": "  A population changes over time. Let be the population at time . Each year, some proportion ( ) produce offspring and some proportion ( ) dies. So: where .   "
},
{
  "id": "subsubsec-Introduction-3",
  "level": "2",
  "url": "notes-week-01.html#subsubsec-Introduction-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "differential equation (DE) "
},
{
  "id": "def-DE-solution",
  "level": "2",
  "url": "notes-week-01.html#def-DE-solution",
  "type": "Definition",
  "number": "2",
  "title": "",
  "body": "  A solution to a DE is a function that satisfies the DE.   "
},
{
  "id": "subsubsec-Introduction-5",
  "level": "2",
  "url": "notes-week-01.html#subsubsec-Introduction-5",
  "type": "Example",
  "number": "3",
  "title": "",
  "body": "  Given , let . Then , so this is a solution to the DE.  Are there others? Can we find another solution? Can we find all solutions? Consider the following calculation: So is the general solution to the DE.  Notice the sloppiness with the constant of integration above. This sort of thing will be typical.   "
},
{
  "id": "subsubsec-Introduction-6",
  "level": "2",
  "url": "notes-week-01.html#subsubsec-Introduction-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initial conditions (IC) "
},
{
  "id": "subsubsec-Introduction-7",
  "level": "2",
  "url": "notes-week-01.html#subsubsec-Introduction-7",
  "type": "Example",
  "number": "4",
  "title": "",
  "body": "  Suppose and . We know that is the general solution to the DE. Plugging in the IC: so is the particular population function we're interested in.   "
},
{
  "id": "subsubsec-Introduction-8",
  "level": "2",
  "url": "notes-week-01.html#subsubsec-Introduction-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initial value problem (IVP) "
},
{
  "id": "subsubsec-Slope-Fields-2",
  "level": "2",
  "url": "notes-week-01.html#subsubsec-Slope-Fields-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "1st order DE "
},
{
  "id": "subsubsec-Slope-Fields-3",
  "level": "2",
  "url": "notes-week-01.html#subsubsec-Slope-Fields-3",
  "type": "Example",
  "number": "5",
  "title": "",
  "body": "  Suppose an object falls subject to gravity and air resistance (which we'll assume is proportional to velocity). Then: where is the gravitational constant, is the drag coefficient, and is the mass. For a more specific example, suppose . Then, at various points in the -plane, we know that a solution function passing through that point must do so with slope . We can draw many sample slopes to get a slope field , which gives a sense of the shape of solution curves (aka integral curves ):   Slope field for a first order DE.    Slope field for showing several approximate solution curves.       "
},
{
  "id": "thm-Picard",
  "level": "2",
  "url": "notes-week-01.html#thm-Picard",
  "type": "Theorem",
  "number": "7",
  "title": "Picard’s Theorem.",
  "body": " Picard's Theorem   Given an IVP , if is continuous and exists and is continuous near , then a solution to the IVP exists and is unique in an interval.   "
},
{
  "id": "subsubsec-Slope-Fields-5",
  "level": "2",
  "url": "notes-week-01.html#subsubsec-Slope-Fields-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partial derivative "
},
{
  "id": "subsubsec-EU-3",
  "level": "2",
  "url": "notes-week-01.html#subsubsec-EU-3",
  "type": "Example",
  "number": "8",
  "title": "",
  "body": "  Consider . Then . Both are continuous when .   Three possible initial condition points.    In the -plane, the upper half plane is shaded. A point labeled is in the upper half plane, with strictly positive -value. A point labeled lies on the -axis. A point labeled is in the unshaded region below the -axis.      The theorem clearly does not apply at the initial condition point . At this point, , so the functions are not defined.  At , , so both exist. More importantly, we can draw a small circle around that point, and are continuous in the entire circle (aka, \"near\" ). So the theorem applies at .  At , both exist. However, any circle around includes points where don't exist. So the theorem doesn't apply at .   "
},
{
  "id": "def-separable",
  "level": "2",
  "url": "notes-week-01.html#def-separable",
  "type": "Definition",
  "number": "10",
  "title": "",
  "body": "  A DE is separable if it can be written in the form:    "
},
{
  "id": "subsubsec-Separable-Equations-6",
  "level": "2",
  "url": "notes-week-01.html#subsubsec-Separable-Equations-6",
  "type": "Example",
  "number": "11",
  "title": "",
  "body": "  Solve . This is an implicit solution to the DE.   "
},
{
  "id": "subsubsec-Separable-Equations-7",
  "level": "2",
  "url": "notes-week-01.html#subsubsec-Separable-Equations-7",
  "type": "Example",
  "number": "12",
  "title": "",
  "body": "  Solve . However, moving from line 2 to line 3, we divided by . This assumed that . Looking back at the DE, it seems that  is a solution. So we must remember to include it when we write the general solution.   "
},
{
  "id": "def-First-Order-Linear",
  "level": "2",
  "url": "notes-week-01.html#def-First-Order-Linear",
  "type": "Definition",
  "number": "13",
  "title": "",
  "body": "  A DE which can be put in the form is called a first order linear equation .   "
},
{
  "id": "subsubsec-First-Order-Linear-3",
  "level": "2",
  "url": "notes-week-01.html#subsubsec-First-Order-Linear-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integrating factor "
},
{
  "id": "subsubsec-First-Order-Linear-4",
  "level": "2",
  "url": "notes-week-01.html#subsubsec-First-Order-Linear-4",
  "type": "Example",
  "number": "14",
  "title": "",
  "body": "      "
},
{
  "id": "subsubsec-First-Order-Linear-5",
  "level": "2",
  "url": "notes-week-01.html#subsubsec-First-Order-Linear-5",
  "type": "Example",
  "number": "15",
  "title": "",
  "body": "  Solve . Applying the IC :    "
},
{
  "id": "recitation-calculus-review",
  "level": "1",
  "url": "recitation-calculus-review.html",
  "type": "Worksheet",
  "number": "",
  "title": "Calculus Review",
  "body": " Calculus Review    Differential equations is a heavily computational topic. It will be very beneficial to review background Calculus material early to prepare for the demands of this course. You will especially want to be comfortable with common differentiation and integration techniques.      Practice your differentiation rules:                            Practice integration by parts (IBP) with the following integrals:                Practice partial fraction decomposition (PFD) with the following integral:        "
},
{
  "id": "recitation-calculus-review-3-1",
  "level": "2",
  "url": "recitation-calculus-review.html#recitation-calculus-review-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Practice your differentiation rules:                       "
},
{
  "id": "recitation-calculus-review-4-1",
  "level": "2",
  "url": "recitation-calculus-review.html#recitation-calculus-review-4-1",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Practice integration by parts (IBP) with the following integrals:             "
},
{
  "id": "recitation-calculus-review-4-2",
  "level": "2",
  "url": "recitation-calculus-review.html#recitation-calculus-review-4-2",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Practice partial fraction decomposition (PFD) with the following integral:      "
},
{
  "id": "homework-list",
  "level": "1",
  "url": "homework-list.html",
  "type": "Section",
  "number": "",
  "title": "Recommended Homework Problems",
  "body": " Recommended Homework Problems   It is recommended that you do all of the following problems in order to internalize and practice the concepts that we learn during lectures. You will submit your work on Canvas in the Assignments tab.  The due dates are typically set well after we've covered all relevant sections for each assignment, in order to be flexible with students' schedules. However, the problems will be most useful if you read them before we cover the relevant section and attempt them right after we cover the section.  You are allowed (encouraged!) to discuss these problems with other students and work together. However, each student should write up their own solutions to submit.    Chapter 0: Introduction to Differential Equations     Section 0.2  4 6, 7, 101 103, 106       Chapter 1: First Order Equations     Section 1.2  1 4, 6, 101 104    Section 1.3  1 10, 101 105, 107    Section 1.4  1 (note: on page 41, not with the other exercises), 4 7, 101, 102, 104    Section 1.6  1 (page 53), 3, 5, 7, 101 103    Section 1.8  2, 4, 101, 13       Chapter 2: Higher Order Linear ODEs     Section 2.1  2, 5, 101, 102, 104, 105    Section 2.2  6 12, 101 107    Section 2.4  2, 3, 101, 104    Section 2.5  2 4, 7, 9, 101 104       Chapter 6: The Laplace Transform     Section 6.1  1 (page 295), 4 (page 298), 5 7, 7 11, 101 104    Section 6.2  2 6, 102    Section 6.3  1, 2, 101 103    Section 6.4  1, 2, 101, 102       Chapter 3: Systems of ODEs     Section 3.2  3, 7, 11, 101 103    Section 3.3  1, 2, 101, 102    Section 3.4  5, 7, 102 104    Section 3.5  1, 101, 102    Section 3.7  2, 3, 101, 102, 104    Section 3.9  4, 5, 101, 102 (just use undetermined coefficients for all of these)      "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
