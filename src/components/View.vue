<template>
    <div>
        <Top/>
        <AboutMe/>
        <Skill/>
    </div>
</template>

<script>

import Top from '@/components/Top';
import AboutMe from '@/components/AboutMe';
import Skill from '@/components/Skill';

export default {
  name: 'View',

  components: {
    Top,
    AboutMe,
    Skill
  },
};
</script>