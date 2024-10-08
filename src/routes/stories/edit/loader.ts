import { getGroupPacksFX } from '@core/group-packs';
import { getGroupsFX } from '@core/groups';
import { getStoryPackFX } from '@core/stories';
import { LoaderFunctionArgs } from 'react-router-dom';

export const editStoryPackLoader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.id) {
    return { groups: [], groupPacks: [], storyPack: null };
  }
  const [groups, groupPacks, storyPack] = await Promise.all([getGroupsFX(), getGroupPacksFX(), getStoryPackFX(params.id)]);

  return { groups, groupPacks, storyPack };
};
