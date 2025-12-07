Custom output file like generated/prisma requires accelerate URL endpoint
Singleton Pattern
- ONE instance in the entire app, and give everyone a global way to access it.
- There is only one PrismaClient instance
- Problem without Singleton
 - You do new PrismaClient() in 10 different files → 10 database connections → Neon crashes
 What Singleton fixes
 One prisma instance shared everywhere → only 1 real connection 
Singleton = “There can be only one” – we use it when creating multiple copies would be expensive, dangerous, or just silly (like having 50 database connections when 1 is enough).
A seed script is a script that inserts initial data into your database automatically.
Prisma has built-in support for seed scripts.Fake metrics fake lots of fake financial data key the seed scripts make that easy scripts work in plasma plasma has built in support for seed script the prima built and support scripture
npx prisma db seed to run the seed file it generate seed.TS file
✔ Seed Script = A file that inserts initial or demo data into your DB
✔ Used for testing, development, demos, quick setup
✔ Saves time, keeps data consistent
✔ Prisma runs it using npx prisma db seed
✔ Essential for real apps like dashboards, SaaS, social apps