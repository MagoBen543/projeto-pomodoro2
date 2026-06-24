-- CreateTable
CREATE TABLE `Settings` (
    `id` INTEGER NOT NULL,
    `workTime` INTEGER NOT NULL,
    `shortBreakTime` INTEGER NOT NULL,
    `longBreakTime` INTEGER NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Task` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `duration` INTEGER NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `startDate` VARCHAR(191) NOT NULL,
    `completeDate` VARCHAR(191) NULL,
    `interruptedAt` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
