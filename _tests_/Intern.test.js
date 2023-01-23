//Child of Employee

const Intern = require('../lib/Intern');
// start set
test('if school is set via constructor', () => {
    const td = "Washington University";
    const int = new Intern("Beta", 10010, "beta_10010@hotmail.com", td);
    expect(int.school).toBe(td);
  });
  // End set 
  // Validate getRole()
  test('if the getRole() return \"Intern\"', () => {
    const td = "Intern";
    const int = new Intern("Beta", 10010, "beta_10010@hotmail.com","Washington University");
    expect(int.getRole()).toBe(td);
  });
  // start get
  test('if the getSchool() get the school name', () => {
    const td = "Washington University";
    const int = new Intern("Beta", 10010, "beta_10010@hotmail.com", td);
    expect(int.getSchool()).toBe(td);
  });
  //end get