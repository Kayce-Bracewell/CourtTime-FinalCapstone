# Court Time

## Project Goal

This project is an attempt to make scheduling local tennis matches a quick and simple process

### Languages Used

HTML, CSS, Javascript, ReactJS, C#, and .NET

### Learning Goals

Maintain a smart and consistent file structure.
Work with DateTime and learn about timezone conversions.
Use ternary statements to hide functionality behind certain requirments.

### Advice

Make a plan for completing your MVP, and a second plan to accomplish your stretch goals. Without properly planning both aspects, you will find it much harder to refactor your project in to your ultimate goal.

### Installation

1) copy SSH key and open terminal. Navigate to workspace and type 'git clone <copied-ssh-key-here>'

2) In the main project directory, run this terminal command 'dotnet user-secrets init'

3) In the same directory, run 'dotnet user-secrets set CourtTimeDbConnectionString "Host=localhost;Port=5432;Username=postgres;Password=<your password>;Database=CourtTime"'

4) Then run, 'dotnet user-secrets set AdminPassword password'

5) run 'dotnet ef migrations add InitialCreate'

6) run 'dotnet ef database update'

7) run 'dotnet restore' to install missing dependencies

8) cd into client and run terminal command 'npm run dev'

9) start the .NET (web) debugger